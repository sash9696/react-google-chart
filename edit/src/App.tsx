import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const DualAxisChart = () => {
  const [showDualAxis, setShowDualAxis] = useState(false);

  const data = [
    ['Year', 'Series 1', 'Series 2'],
    ['2015', 100, 200],
    ['2016', 120, 240],
    ['2017', 150, 260],
    ['2018', 180, 280],
  ];

  const options = {
    title: 'Age vs. Weight comparison',
    width: 600,
    height: 400,
    legend: 'none',
    bar: { groupWidth: '40%' },
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: showDualAxis ? 1 : null, type:'line' },
    },
    vAxes: {
      0: { title: 'Series 1 Values',  format: '',
      formatOptions: {
        source: 'inline',
        prefix: '$',
        suffix: 'usd',
      },}, // Format the primary axis using 'short' format
      1: { title: 'Series 2 Values',  format: 'short',
      formatOptions: {
        source: 'inline',
        prefix: 'Rs',
        suffix: '',
      } },
    },
    
    hAxis: { title: 'Year' },

  };

  // Custom formatter function for the secondary axis
  const secondaryAxisFormatter = (value) => (showDualAxis ? `${value}$` : value);

  // Update the options based on the showDualAxis state
  // if (showDualAxis) {
  //   options.vAxis = { 1: { title: 'Series 2 Values', format: 'decimal', viewWindow: { max: 300 } } };
  // } else {
  //   options.vAxis = undefined;
  // }

  const handleCheckboxChange = () => {
    setShowDualAxis((prevState) => !prevState);
  };

  return (
    <div>
      <label>
        Show Dual Axis:
        <input type="checkbox" checked={showDualAxis} onChange={handleCheckboxChange} />
      </label>
      <Chart chartType="ColumnChart" data={data} options={options} />
    </div>
  );
};

export default DualAxisChart;
