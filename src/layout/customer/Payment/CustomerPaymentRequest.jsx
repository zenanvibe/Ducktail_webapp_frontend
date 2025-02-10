import React from "react";

const statusClasses = {
  Approved: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-500" },
  Reject: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" },
};

const CustomerPaymentRequest = () => {
  const data = [
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Approved", statusColor: "Approved", paymentStatus: "Paid", amount: "1,00,000" },
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Reject", statusColor: "Reject", paymentStatus: "Pending", amount: "1,00,000" },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Payment Request</h2>
       
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left border-b border-gray-300">
            <th className="p-2">Time & Date</th>
            <th className="p-2">Comments</th>
            <th className="p-2">Status</th>
            <th className="p-2">Payment Status</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) => (
            <tr key={index} className="">
              <td className="py-3 px-4">{project.date}</td>
              <td className="py-3 px-4">{project.comment}</td>
              <td className="py-3 px-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusClasses[project.statusColor].bg} ${statusClasses[project.statusColor].text}`}>
                  <span className={`h-2 w-2 rounded-full ${statusClasses[project.statusColor].dot} mr-2`}></span>
                  {project.status}
                </span>
              </td>
            
              <td className="py-3 px-4 text-green-600">{project.paymentStatus}</td>
              <td className="py-3 px-4 text-black">₹ {project.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPaymentRequest;
