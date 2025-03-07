import React from 'react'
import { useState } from "react";
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

     // Data for the monthly bar chart
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

     const renderTimeframeDropdown = () => (
       <div className="relative inline-block">
         <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
           {timeframe}
           <ChevronDown size={16} />
         </button>
       </div>
     );
  return (
   
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Monthly Report Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Monthly Report</h2>
            {renderTimeframeDropdown()}
          </div>
          
          <div className="h-64 w-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  domain={[0, 10]}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip formatter={(value) => [`$${value}`, '']} />
                <Bar dataKey="total" fill="#AEEBDB" radius={[4, 4, 0, 0]} />
                <Bar dataKey="value" fill="#34A853" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
  </div>
  );
}

export default Barchart