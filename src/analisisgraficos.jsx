import React from 'react';
import {Chart} from 'react-google-charts';

//Prueba google charts iframe

const data = [
    ["Librerias", "Performance", "Accessibility","Best Practices","SEO"],
    ["Google Charts", 45, 98,83,89],
    ["D3", 46, 98,83,89],
    ["Echarts", 49, 98,83,89],
    ["Chart.JS", 50, 98, 83,89],
];
  
const options = {
    title: "Analisis de librerias para graficos",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Valores promedio",
      minValue: 0,
    },
    vAxis: {
      title: "Librerias",
    },
  };

function GoogleChart() {
return (
    <Chart
    chartType="BarChart"
    width="100%"
    height="400px"
    data={data}
    options={options}
    />
);
}

export default GoogleChart;