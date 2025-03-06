import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";
const Piechart = () => {
  // Data for the overview pie chart
  const overviewData = [
    { name: "Live", value: 65.2, color: "#4285F4" },
    { name: "Pending", value: 25.0, color: "#34A853" },
    { name: "Completed", value: 9.8, color: "#FBBC05" },
  ];

  // Function to calculate label position inside pie slices
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    value,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="bold"
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Overview</h2>
        <button className="text-gray-500">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center">
        {/* Pie chart */}
        <div className="h-52 w-52 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={overviewData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
                strokeWidth={0}
              >
                {overviewData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-12 w-full">
          {overviewData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
              <span className="text-lg font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Piechart