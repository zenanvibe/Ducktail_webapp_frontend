import React from "react";

const transactions = [
  {
    dateTime: "10 Jan 2025 12:18 pm",
    transactionId: "ch_TxMSHSSBB124R",
    paidAmount: "₹ 15,000",
    type: "Credit",
    status: "Active",
  },
  {
    dateTime: "10 Jan 2025 12:18 pm",
    transactionId: "ch_TxMSHSSBB124R",
    paidAmount: "₹ 15,000",
    type: "Credit",
    status: "Active",
  },
  {
    dateTime: "10 Jan 2025 12:18 pm",
    transactionId: "ch_TxMSHSSBB124R",
    paidAmount: "₹ 15,000",
    type: "Credit",
    status: "Active",
  },
];

const statusClasses = {
  Active: {
    bg: "bg-green-100",
    text: "text-green-600",
    dot: "bg-green-500",
  },
};

const SubscriptionHistoryTile = () => {
  return (
    <div className="  min-h-52 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-4xl">
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500 border-b">
                <th className="py-2 px-4">Time & Date</th>
                <th className="py-2 px-4">Transaction Id</th>
                <th className="py-2 px-4">Paid Amount</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="text-sm text-gray-700 border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{transaction.dateTime}</td>
                  <td className="py-3 px-4">{transaction.transactionId}</td>
                  <td className="py-3 px-4">{transaction.paidAmount}</td>
                  <td className="py-3 px-4">{transaction.type}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusClasses[transaction.status]?.bg} ${statusClasses[transaction.status]?.text}`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${statusClasses[transaction.status]?.dot} mr-2`}
                      ></span>
                      {transaction.status}
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

export default SubscriptionHistoryTile;
