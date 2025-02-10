import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const statusClasses = {
  Approved: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-500" },
  Reject: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" },
};

const PaymentValue = () => {
  const data = [
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Approved", statusColor: "Approved", amount: "1,00,00,000" },
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Approved", statusColor: "Approved", amount: "1,00,000" },
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Reject", statusColor: "Reject", amount: "0" },
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Approved", statusColor: "Approved", amount: "1,00,000" },
    { date: "10 Jan 2025 12:18 pm", comment: "Concerned entities must pay as per the clauses mentioned", status: "Reject", statusColor: "Reject", amount: "-1,00,000" },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-x-auto" style={{ borderRadius: "12px" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Total Project Value</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          + Add
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className=" text-left border-b border-gray-400">
            <th className="p-2">Time & Date</th>
            <th className="p-2">Comments</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
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
              <td className="py-3 px-4 flex gap-2">
                <FaEdit className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-600 cursor-pointer" />
              </td>
              <td className={`py-3 px-4 ${parseInt(project.amount.replace(/,/g, "")) < 0 ? "text-red-600" : "text-black"}`}>
                ₹ {project.amount}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className=" font-semibold border-t border-gray-400">
            <td colSpan="4" className="p-2 text-right">Total</td>
            <td className="p-2">₹ 1,02,00,000</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PaymentValue;
