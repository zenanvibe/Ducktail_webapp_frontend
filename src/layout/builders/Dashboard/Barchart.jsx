import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Barchart = () => {
      const data = [
  { month: 'Jan', hours: 4000 },
  { month: 'Feb', hours: 3000 },
  { month: 'Mar', hours: 2000 },
  { month: 'Apr', hours: 2780 },
  { month: 'May', hours: 1890 },
  { month: 'Jun', hours: 2390 },
  { month: 'Jul', hours: 3490 },
  { month: 'Aug', hours: 3200 },
  { month: 'Sep', hours: 4500 },
  { month: 'Oct', hours: 4100 },
  { month: 'Nov', hours: 4700 },
  { month: 'Dec', hours: 5100 },
];
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #E4E4E4",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          margin: "10px 0",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Monthly Report
      </h2>
      <ResponsiveContainer width="30%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#4DD6B5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart