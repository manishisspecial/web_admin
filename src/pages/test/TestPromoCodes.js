import React, { useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const initialPromoCodes = [
  {
    id: 1,
    code: 'WELCOME20',
    discount: 20,
    expiryDate: '2024-12-31',
    isActive: true,
  },
  {
    id: 2,
    code: 'SUMMER15',
    discount: 15,
    expiryDate: '2024-08-31',
    isActive: true,
  },
  {
    id: 3,
    code: 'FAMILY25',
    discount: 25,
    expiryDate: '2024-06-30',
    isActive: false,
  },
];

const TestPromoCodes = () => {
  const [promoCodes, setPromoCodes] = useState(initialPromoCodes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPromo, setEditingPromo] = useState(null);
  const [formData, setFormData] = useState({
    code: '',
    discount: '',
    expiryDate: '',
    isActive: true,
  });

  const validatePromoCode = (code) => {
    // Simulate validation rules
    if (code.length < 4) {
      toast.error('Promo code must be at least 4 characters long');
      return false;
    }
    if (code.length > 20) {
      toast.error('Promo code must be less than 20 characters');
      return false;
    }
    if (!/^[A-Z0-9]+$/.test(code)) {
      toast.error('Promo code can only contain uppercase letters and numbers');
      return false;
    }
    return true;
  };

  const validateDiscount = (discount) => {
    const numDiscount = Number(discount);
    if (isNaN(numDiscount) || numDiscount < 0 || numDiscount > 100) {
      toast.error('Discount must be between 0 and 100');
      return false;
    }
    return true;
  };

  const validateExpiryDate = (date) => {
    const expiryDate = new Date(date);
    const today = new Date();
    if (expiryDate < today) {
      toast.error('Expiry date must be in the future');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePromoCode(formData.code)) return;
    if (!validateDiscount(formData.discount)) return;
    if (!validateExpiryDate(formData.expiryDate)) return;

    if (editingPromo) {
      setPromoCodes(
        promoCodes.map((promo) =>
          promo.id === editingPromo.id ? { ...formData, id: promo.id } : promo
        )
      );
      toast.success('Test promo code updated successfully');
      console.log('Test promo code updated:', { ...formData, id: editingPromo.id });
    } else {
      const newPromo = {
        ...formData,
        id: Math.max(...promoCodes.map((p) => p.id)) + 1,
      };
      setPromoCodes([...promoCodes, newPromo]);
      toast.success('Test promo code added successfully');
      console.log('Test promo code added:', newPromo);
    }
    handleCloseModal();
  };

  const handleEdit = (promo) => {
    setEditingPromo(promo);
    setFormData(promo);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setPromoCodes(promoCodes.filter((promo) => promo.id !== id));
    toast.success('Test promo code deleted');
    console.log('Test promo code deleted:', id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPromo(null);
    setFormData({
      code: '',
      discount: '',
      expiryDate: '',
      isActive: true,
    });
  };

  const checkExpiredPromos = () => {
    const today = new Date();
    const expiredPromos = promoCodes.filter(
      (promo) => new Date(promo.expiryDate) < today && promo.isActive
    );
    if (expiredPromos.length > 0) {
      toast.error(`${expiredPromos.length} promo code(s) have expired`);
      console.log('Expired promo codes:', expiredPromos);
    }
  };

  // Check for expired promos on component mount
  React.useEffect(() => {
    checkExpiredPromos();
  }, []);

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Test Promo Codes</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Test Promo Code
          </button>
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
                      Code
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Discount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Expiry Date
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
                  {promoCodes.map((promo) => (
                    <tr key={promo.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {promo.code}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {promo.discount}%
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(new Date(promo.expiryDate), 'MMM d, yyyy')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            promo.isActive
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {promo.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => handleEdit(promo)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          <PencilIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                          onClick={() => handleDelete(promo.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="h-5 w-5" aria-hidden="true" />
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={handleCloseModal}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <form onSubmit={handleSubmit}>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {editingPromo ? 'Edit Test Promo Code' : 'Add Test Promo Code'}
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                        Code
                      </label>
                      <input
                        type="text"
                        name="code"
                        id="code"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.code}
                        onChange={(e) =>
                          setFormData({ ...formData, code: e.target.value.toUpperCase() })
                        }
                        placeholder="Enter promo code (uppercase letters and numbers only)"
                      />
                    </div>

                    <div>
                      <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                        Discount (%)
                      </label>
                      <input
                        type="number"
                        name="discount"
                        id="discount"
                        required
                        min="0"
                        max="100"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.discount}
                        onChange={(e) =>
                          setFormData({ ...formData, discount: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        name="expiryDate"
                        id="expiryDate"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData({ ...formData, expiryDate: e.target.value })
                        }
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={formData.isActive}
                        onChange={(e) =>
                          setFormData({ ...formData, isActive: e.target.checked })
                        }
                      />
                      <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                        Active
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                  >
                    {editingPromo ? 'Save Changes' : 'Add Promo Code'}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={handleCloseModal}
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

export default TestPromoCodes; 