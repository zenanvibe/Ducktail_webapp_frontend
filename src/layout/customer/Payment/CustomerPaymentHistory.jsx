import React from "react";

const statusClasses = {
  Paid: "text-green-600",
  "Not Paid": "text-red-600",
  Failed: "text-red-600",
};

const CustomerPaymentHistory = () => {
  const data = [
    { date: "10 Jan 2025 12:18 pm", comment: "Payment processed successfully.", paymentStatus: "Paid", amount: "1,00,000" },
    { date: "10 Jan 2025 12:18 pm", comment: "Pending due to insufficient funds.", paymentStatus: "Failed", amount: "1,00,000" },
  ];

  // Calculate total
  const totalAmount = data.reduce((sum, item) => {
    const numericAmount = parseInt(item.amount.replace(/,/g, ""));
    return sum + (isNaN(numericAmount) ? 0 : numericAmount);
  }, 0).toLocaleString("en-IN");

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Payment History</h2>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-center border-b border-gray-300">
            <th className="p-2">Time & Date</th>
            <th className="p-2">Comments</th>
            <th className="p-2">Payment Status</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={index} className="text-center">
              <td className="py-3 px-4">{record.date}</td>
              <td className="py-3 px-4">{record.comment}</td>
              <td className={`py-3 px-4 font-semibold ${statusClasses[record.paymentStatus] || "text-gray-600"}`}>
                {record.paymentStatus}
              </td>
              <td className="py-3 px-4 text-black">₹ {record.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-400 text-center font-semibold">
            <td colSpan="3" className="p-2"></td>
            <td className="p-2">Total: ₹ {totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomerPaymentHistory;
