import React, { useState } from 'react';
import { format } from 'date-fns';
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

const PromoCodes = () => {
  const [promoCodes, setPromoCodes] = useState(initialPromoCodes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPromo, setEditingPromo] = useState(null);
  const [formData, setFormData] = useState({
    code: '',
    discount: '',
    expiryDate: '',
    isActive: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPromo) {
      setPromoCodes(
        promoCodes.map((promo) =>
          promo.id === editingPromo.id ? { ...formData, id: promo.id } : promo
        )
      );
    } else {
      setPromoCodes([
        ...promoCodes,
        { ...formData, id: Math.max(...promoCodes.map((p) => p.id)) + 1 },
      ]);
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

  return (
    <div className="p-6">
      <div className="sm:flex sm:items-center mb-6">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-bold text-gray-900">Promo Codes Management</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Promo Code
          </button>
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
                    Code
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Discount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Expiry Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
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
                        className="text-indigo-600 hover:text-indigo-900 mr-4 inline-flex items-center"
                      >
                        <PencilIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        onClick={() => handleDelete(promo.id)}
                        className="text-red-600 hover:text-red-900 inline-flex items-center"
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={handleCloseModal}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        {editingPromo ? 'Edit Promo Code' : 'Add Promo Code'}
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label
                            htmlFor="code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Code
                          </label>
                          <input
                            type="text"
                            name="code"
                            id="code"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={formData.code}
                            onChange={(e) =>
                              setFormData({ ...formData, code: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="discount"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Discount (%)
                          </label>
                          <input
                            type="number"
                            name="discount"
                            id="discount"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={formData.discount}
                            onChange={(e) =>
                              setFormData({ ...formData, discount: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="expiryDate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            name="expiryDate"
                            id="expiryDate"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={formData.expiryDate}
                            onChange={(e) =>
                              setFormData({ ...formData, expiryDate: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="flex items-center">
                          <input
                            id="isActive"
                            name="isActive"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            checked={formData.isActive}
                            onChange={(e) =>
                              setFormData({ ...formData, isActive: e.target.checked })
                            }
                          />
                          <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                            Is Active
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {editingPromo ? 'Update' : 'Add'}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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

export default PromoCodes; 