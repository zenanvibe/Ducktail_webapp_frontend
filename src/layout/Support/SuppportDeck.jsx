import React from 'react';

const SupportDesk = () => {
  return (
    <div className="p-6 space-y-6 font-sans">
      {/* Ticket Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Ticket Reason
            </label>
            <input
              type="text"
              placeholder="Question"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Enter Description"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Support History */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Support History</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date & Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Company Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Company Id</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Query</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  date: 'Jan 18, 2024',
                  company: 'Akash',
                  id: 'DT12345',
                  query: 'Concerned entities must pay as per the clauses mentioned',
                  status: 'Completed'
                },
                {
                  date: 'Jan 18, 2025',
                  company: 'Karthik',
                  id: 'DT12346',
                  query: 'Concerned entities must pay as per the clauses mentioned',
                  status: 'Hold'
                },
                {
                  date: 'Jan 18, 2026',
                  company: 'Akash',
                  id: 'DT12347',
                  query: 'Concerned entities must pay as per the clauses mentioned',
                  status: 'Pending'
                },
                {
                  date: 'Jan 18, 2027',
                  company: 'Akash',
                  id: 'DT12345',
                  query: 'Concerned entities must pay as per the clauses mentioned',
                  status: 'Decline'
                }
              ].map((item, index) => (
                <tr key={index}>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.date}</td>
                  <td className="py-4 px-4 text-sm text-blue-600">{item.company}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.query}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${item.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                      ${item.status === 'Hold' ? 'bg-orange-100 text-orange-800' : ''}
                      ${item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${item.status === 'Decline' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportDesk;