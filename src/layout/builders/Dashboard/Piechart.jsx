import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";
import useDashboardStore from '../../../store/builders/useDashboardStore';

const Piechart = () => {
  const { projectTile, getProjectTile, isLoading } = useDashboardStore();
  const [chartData, setChartData] = useState([]);
  
  // Using useCallback to memoize the function so it doesn't recreate on every render
  const calculateChartData = useCallback(() => {
    if (!projectTile) return;
    
    const { live_projects, pending_projects, completed_projects } = projectTile;
    const total = live_projects + pending_projects + completed_projects;
    
    if (total === 0) {
      setChartData([
        { name: "No Data", value: 100, color: "#CCCCCC" }
      ]);
      return;
    }
    
    // Calculate percentages
    const livePercentage = (live_projects / total * 100).toFixed(1);
    const pendingPercentage = (pending_projects / total * 100).toFixed(1);
    const completedPercentage = (completed_projects / total * 100).toFixed(1);
    
    setChartData([
      { name: "Live", value: parseFloat(livePercentage), color: "#4285F4", },
      { name: "Pending", value: parseFloat(pendingPercentage), color: "#34A853", },
      { name: "Completed", value: parseFloat(completedPercentage), color: "#FBBC05",  }
    ]);
  }, [projectTile]); // Add projectTile as a dependency
  
  useEffect(() => {
    // Fetch project statistics if not already loaded
    if (!projectTile) {
      getProjectTile();
    } else {
      calculateChartData();
    }
  }, [projectTile, getProjectTile, calculateChartData]); // Add calculateChartData to dependencies
  
  // This effect is redundant now since calculateChartData is in the dependency array above
  // and will run whenever projectTile changes
  
  // Custom Label with Animation
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = (innerRadius + outerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent > 0.05 ? (
      <motion.text
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14px"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </motion.text>
    ) : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white p-4 rounded-lg shadow-md w-full h-[250px] sm:h-[280px] md:h-[350px] lg:h-[380px] flex flex-col"
    >
      <div className="flex justify-between items-center w-full mb-3">
        <h2 className="text-base md:text-lg font-bold">Projects Overview</h2>
        <button className="text-gray-500">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : chartData.length === 0 ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">No data available</p>
        </div>
      ) : (
        <>
          <div className="flex-grow flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  strokeWidth={0}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full mt-3">
            {chartData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-semibold">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Piechart;