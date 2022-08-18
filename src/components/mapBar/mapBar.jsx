import React from "react";
import Chart from "react-apexcharts";
import "./mapBar.css"

const MapBar = ({ data }) => {
  var data1 = [];
  var range1=0;
  var range2=0;
  var range3=0;
  data.map((item) => {
    if (item.data > 5000) {
      range1++;
    } else if (item.data < 5000 && item.data > 1000) {
      range2++;
    } else range3++;
  });

  data1.push({ name: "$>5k", data: [range1] });
  data1.push({ name: "$1k-5k", data: [range2] });
  data1.push({ name: "$<1k", data: [range3] });

  console.log(data1);

  return (
    <div className="bar-container">
      <Chart
        type="bar"
        height={150}
        series={data1}
        options={{
          chart: {
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: "60%",
            },
          },
          stroke: {
            width: 1,
          },
          xaxis: {
            categories: ["$ Usage"],
          },
          legend: {
            position: "bottom",
            show: false,
          },
          dataLabels: {
            enabled: true,
          },
          grid: {
            show: false,
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default MapBar;
