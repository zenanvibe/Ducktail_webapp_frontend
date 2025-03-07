import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChevronDown } from "lucide-react";

const Barchart = () => {
  const [timeframe, setTimeframe] = useState("Yearly");

  const monthlyData = [
    { month: "Jan", value: 4.2, total: 6.7 },
    { month: "Feb", value: 5.5, total: 7.8 },
    { month: "Mar", value: 4.7, total: 6.0 },
    { month: "Apr", value: 5.0, total: 9.0 },
    { month: "May", value: 3.8, total: 6.7 },
    { month: "Jun", value: 4.3, total: 6.7 },
    { month: "Jul", value: 5.0, total: 7.8 },
    { month: "Aug", value: 4.2, total: 6.7 },
    { month: "Sep", value: 5.5, total: 7.6 },
    { month: "Oct", value: 4.2, total: 6.0 },
    { month: "Nov", value: 5.0, total: 9.0 },
    { month: "Dec", value: 3.8, total: 6.7 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-[250px] sm:h-[280px] md:h-[350px] lg:h-[380px] flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base md:text-lg font-bold">Monthly Report</h2>
        <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
          {timeframe}
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData} margin={{ top: 5, right: 5, left: 0, bottom: 15 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
              ticks={[0, 2, 4, 6, 8, 10]}
              domain={[0, 10]}
              tick={{ fontSize: 10 }}
            />
            <Tooltip formatter={(value) => [`$${value}`, ""]} />
            <Bar dataKey="total" fill="#AEEBDB" radius={[3, 3, 0, 0]} />
            <Bar dataKey="value" fill="#34A853" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
