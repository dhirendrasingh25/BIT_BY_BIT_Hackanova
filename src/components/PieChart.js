import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: data
      });
    }
  }, [data]);

  return <canvas ref={chartContainer} />;
};

export default PieChart;
