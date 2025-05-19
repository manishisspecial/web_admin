import React, { useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const initialPayments = [
  {
    id: 1,
    customerName: 'John Doe',
    amount: 299.99,
    planName: 'Premium Health',
    paymentDate: '2024-03-15',
    status: 'Completed',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    amount: 199.99,
    planName: 'Basic Health',
    paymentDate: '2024-03-14',
    status: 'Pending',
  },
  {
    id: 3,
    customerName: 'Mike Johnson',
    amount: 399.99,
    planName: 'Family Health',
    paymentDate: '2024-03-13',
    status: 'Failed',
  },
];

const statusColors = {
  Completed: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Failed: 'bg-red-100 text-red-800',
};

const TestPayments = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [filters, setFilters] = useState({
    date: '',
    plan: '',
    status: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPayment, setNewPayment] = useState({
    customerName: '',
    amount: '',
    planName: '',
    paymentDate: format(new Date(), 'yyyy-MM-dd'),
    status: 'Pending',
  });

  const filteredPayments = payments.filter((payment) => {
    return (
      (!filters.date || payment.paymentDate === filters.date) &&
      (!filters.plan || payment.planName === filters.plan) &&
      (!filters.status || payment.status === filters.status)
    );
  });

  const handleAddPayment = (e) => {
    e.preventDefault();
    const payment = {
      ...newPayment,
      id: Math.max(...payments.map((p) => p.id)) + 1,
      amount: parseFloat(newPayment.amount),
    };
    setPayments([...payments, payment]);
    setIsModalOpen(false);
    setNewPayment({
      customerName: '',
      amount: '',
      planName: '',
      paymentDate: format(new Date(), 'yyyy-MM-dd'),
      status: 'Pending',
    });
    toast.success('Test payment added successfully');
    console.log('Test payment added:', payment);
  };

  const handleStatusChange = (id, newStatus) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: newStatus } : payment
      )
    );
    toast.success(`Payment status updated to ${newStatus}`);
    console.log('Test payment status updated:', { id, newStatus });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Test Payments</h1>

      {/* Add Payment Button */}
      <div className="mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Test Payment
        </button>
      </div>

      {/* Filters */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
            Plan
          </label>
          <select
            id="plan"
            name="plan"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={filters.plan}
            onChange={(e) => setFilters({ ...filters, plan: e.target.value })}
          >
            <option value="">All Plans</option>
            <option value="Premium Health">Premium Health</option>
            <option value="Basic Health">Basic Health</option>
            <option value="Family Health">Family Health</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Customer Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Plan Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Payment Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {payment.customerName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ${payment.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {payment.planName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(new Date(payment.paymentDate), 'MMM d, yyyy')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <select
                          value={payment.status}
                          onChange={(e) => handleStatusChange(payment.id, e.target.value)}
                          className={`rounded-full px-2 text-xs font-semibold leading-5 ${
                            statusColors[payment.status]
                          }`}
                        >
                          <option value="Completed">Completed</option>
                          <option value="Pending">Pending</option>
                          <option value="Failed">Failed</option>
                        </select>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {
                            setPayments(payments.filter((p) => p.id !== payment.id));
                            toast.success('Test payment deleted');
                            console.log('Test payment deleted:', payment);
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsModalOpen(false)}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <form onSubmit={handleAddPayment}>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Add Test Payment
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        id="customerName"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={newPayment.customerName}
                        onChange={(e) =>
                          setNewPayment({ ...newPayment, customerName: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        required
                        min="0"
                        step="0.01"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={newPayment.amount}
                        onChange={(e) =>
                          setNewPayment({ ...newPayment, amount: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="planName" className="block text-sm font-medium text-gray-700">
                        Plan Name
                      </label>
                      <select
                        id="planName"
                        name="planName"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={newPayment.planName}
                        onChange={(e) =>
                          setNewPayment({ ...newPayment, planName: e.target.value })
                        }
                      >
                        <option value="">Select a plan</option>
                        <option value="Premium Health">Premium Health</option>
                        <option value="Basic Health">Basic Health</option>
                        <option value="Family Health">Family Health</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700">
                        Payment Date
                      </label>
                      <input
                        type="date"
                        name="paymentDate"
                        id="paymentDate"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={newPayment.paymentDate}
                        onChange={(e) =>
                          setNewPayment({ ...newPayment, paymentDate: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                  >
                    Add Payment
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPayments; 