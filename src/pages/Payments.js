import React, { useState } from 'react';
import { format } from 'date-fns';

const payments = [
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
    status: 'Completed',
  },
  // Add more dummy data as needed
];

const statusColors = {
  Completed: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Failed: 'bg-red-100 text-red-800',
};

const Payments = () => {
  const [filters, setFilters] = useState({
    date: '',
    plan: '',
    status: '',
  });

  const filteredPayments = payments.filter((payment) => {
    return (
      (!filters.date || payment.paymentDate === filters.date) &&
      (!filters.plan || payment.planName === filters.plan) &&
      (!filters.status || payment.status === filters.status)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Payments</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
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
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Plan Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Payment Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
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
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          statusColors[payment.status]
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments; 