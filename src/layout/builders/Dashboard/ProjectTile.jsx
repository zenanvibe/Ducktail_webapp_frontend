import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ProjectTile = ({ number, title, icon, chartId, chartColor, lineWidth }) => {
  useEffect(() => {
    const options = {
      chart: {
        height: 100,
        width: 120,
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: chartColor,
          gradientToColors: [chartColor],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: lineWidth, // Use the lineWidth prop
        colors: [chartColor],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -36,
        },
      },
      series: [
        {
          name: "Developer Edition",
          data: [4, 6, 5, 6, 4, 10].reverse(), // Reversed data
          color: chartColor,
        },
      ],
      xaxis: {
        categories: ['07 February', '06 February', '05 February', '04 February', '03 February', '02 February', '01 February'].reverse(),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    const chart = new ApexCharts(document.getElementById(chartId), options);
    chart.render();

    // Cleanup on unmount
    return () => {
      chart.destroy();
    };
  }, [chartId, chartColor, lineWidth]);

  return (
    <div className="bg-white h-36 w-auto rounded-2xl shadow-md p-4 flex flex-col justify-between relative">
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-sm text-gray-600 font-semibold">{title}</p>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="rounded-full">
          <img src={icon} alt={title} className="h-10 w-10" />
        </div>
      </div>
      <div className="absolute -bottom-7 right-4">
        <div id={chartId} className="rounded-full"></div>
      </div>
    </div>
  );
};

const ProjectTiles = () => {
  const tilesData = [
    { number: 5, title: 'Live projlkoects', icon: '/protile/engineer_10727828.png', chartId: 'chart-1', chartColor: '#2FB2AB', lineWidth: 1 },
    { number: 3, title: 'Pending Projects', icon: '/protile/onboarding_16751381.png', chartId: 'chart-2', chartColor: '#27CFA7', lineWidth: 1 },
    { number: 2, title: 'Completed projects', icon: '/protile/folder_11171774.png', chartId: 'chart-3', chartColor: '#6142FF', lineWidth: 1 },
    { number: 18, title: 'Project enquiries', icon: '/protile/questionnaire_11275251.png', chartId: 'chart-4', chartColor: '#FA902F', lineWidth: 1 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {tilesData.map((tile, index) => (
        <ProjectTile
          key={index}
          number={tile.number}
          title={tile.title}
          icon={tile.icon}
          chartId={tile.chartId}
          chartColor={tile.chartColor}
          lineWidth={tile.lineWidth} // Pass the lineWidth prop
        />
      ))}
    </div>
  );
};

export default ProjectTiles;
