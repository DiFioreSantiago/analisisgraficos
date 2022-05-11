import React from 'react';
import {Chart} from 'react-google-charts';

//Prueba google charts iframe

const data = [
    ["Librerias", "Performance", "Accessibility","Best Practices","SEO"],
    ["Google Charts", 68, 98,83,96],
    ["D3", 63, 98,83,96],
    ["Echarts", 70, 98,83,96],
    ["Chart.JS", 56, 98, 83,96],
];
  
const options = {
    title: "Analisis de librerias para graficos en AMP",
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