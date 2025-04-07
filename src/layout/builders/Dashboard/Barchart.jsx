import React, { useState, useEffect } from "react";
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
import useDashboardStore from '../../../store/builders/useDashboardStore';

const Barchart = () => {
  const [projectType, setProjectType] = useState("Live Projects");
  const [open, setOpen] = useState(false);
  
  const { chartData, getChartData, isLoading } = useDashboardStore();
  
  useEffect(() => {
    // Fetch chart data when component mounts
    getChartData();
  }, [getChartData]);

  // Project type options for the dropdown - match exactly with API data names
  const projectTypes = [
    "Live Projects",
    "Pending Projects",
    "Completed Projects",
    "Project Enquiries"
  ];

  // Format the API data for the selected project type
  const getFormattedData = () => {
    if (!chartData || !chartData.labels || !chartData.datasets) return [];
    
    // Find the dataset that matches the selected project type
    const selectedDataset = chartData.datasets.find(dataset => 
      dataset.name === projectType
    );
    
    if (!selectedDataset) return [];

    // Map months to the corresponding data points
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Create an array of months with corresponding counts from the selected dataset
    return chartData.labels.map((label, index) => {
      // Extract month from date (assuming format YYYY-MM)
      const monthIndex = parseInt(label.split('-')[1]) - 1; // Convert 1-based to 0-based index
      
      return {
        month: months[monthIndex],
        count: selectedDataset.data[index] || 0
      };
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-[250px] sm:h-[280px] md:h-[350px] lg:h-[380px] flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base md:text-lg font-bold">Monthly Report</h2>
        <div className="relative">
          <button 
            className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
            onClick={() => setOpen(!open)}
          >
            {projectType}
            <ChevronDown size={14} />
          </button>
          
          {open && (
            <div className="absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => {
                      setProjectType(type);
                      setOpen(false);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <p>Loading chart data...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={getFormattedData()} 
              margin={{ top: 5, right: 5, left: 0, bottom: 15 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }} 
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 1, 2, 3, 4, 5, 6]}
                domain={[0, 6]}
                tick={{ fontSize: 10 }}
              />
              <Tooltip formatter={(value) => [value, projectType]} />
              <Bar 
                dataKey="count" 
                fill="#34A853" 
                radius={[3, 3, 0, 0]} 
                name={projectType}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Barchart;