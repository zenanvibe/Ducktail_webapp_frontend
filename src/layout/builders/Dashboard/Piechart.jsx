import React from 'react'
import { PieChart,Pie,Cell,Tooltip,Legend} from "recharts"
const Piechart = () => {
const data = [
  { name: 'Live', value: 652 },
  { name: 'Pending', value: 250 },
  { name: 'Completed', value: 98 },
];

const COLORS = ['#4DD6B5', '#FFC107', '#FF5733'];

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
  const radius = outerRadius + 10; // Adjust label position
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  // Calculate percentage
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  const percentage = ((value / total) * 100).toFixed(1); // Format to one decimal place

  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="middle">
      {`${name}: ${percentage}%`}
    </text>
  );
};
    

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #E4E4E4",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ margin: "10px 0", fontSize: "24px" }}>Overview</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          label={renderLabel} // Custom label function
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          formatter={(value, entry, index) => (
            <span style={{ color: COLORS[index % COLORS.length] }}>
              {value}
            </span>
          )}
        />
      </PieChart>
    </div>
  );
}

export default Piechart