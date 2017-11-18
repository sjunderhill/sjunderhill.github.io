function setupChartLiquidity() {

  var chartLabels = labelDates  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets

  chartDatasets[0] = {
      type: 'line',
      label: labelIlliquids[5],
      fill: false,
      backgroundColor: colourWTWMidnight_Light40,
      borderColor: colourWTWMidnight_Light40,
      borderWidth: 3,
      data: illiquidRatioLower,
      pointRadius: 0,
      borderDash: [10,5],
  }

  chartDatasets[1] = {
      type: 'line',
      label: labelIlliquids[6],
      fill: false,
      backgroundColor: colourWTWPlum_Light40,
      borderColor: colourWTWPlum_Light40,
      borderWidth: 3,
      data: illiquidRatioTarget,
      pointRadius: 0,
      borderDash: [10,5],
  }
  chartDatasets[2] = {
      type: 'line',
      label: labelIlliquids[7],
      fill: false,
      backgroundColor: colourWTWRoyal_Light40,
      borderColor: colourWTWRoyal_Light40,
      borderWidth: 3,
      data: illiquidRatioUpper,
      pointRadius: 0,
      borderDash: [10,5],
  }

  for (var il=0; il<ilMax; il++) {
    chartDatasets[il+3] = {
      type: 'bar',
      label: labelIlliquids[il],  // Series labels
      backgroundColor: colours[il],
      borderColor: colours[il],
      borderWidth: 1,
      spanGaps: false,
      yAxisID: "bar-y-axis",
      data: illiquidityRatio[il],
    }

    chartDatasets[ilMax+3] = {
      type: 'bar',
      label: labelIlliquids[0] + ' - New',  // Series labels
      backgroundColor: coloursWTW[2][0],
      borderColor: coloursWTW[2][0],
      borderWidth: 1,
      spanGaps: false,
      yAxisID: "bar-y-axis",
      data: illiquidityNewRatio,
    }
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Illiquidity Ratio - Split by Asset Class',
      fullWidth: false
    },
    showLines: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: false,
          labelString: "Illiquidity Ratio (%)"
        },
        stacked: false,
        ticks: {
          beginAtZero: true,
          max: 60,
          callback: function(value, index, values) {
            return value.toLocaleString("en-US");
          }
        }
      },{
        id: "bar-y-axis",
        stacked: true,
        display: false,
        ticks: {
          beginAtZero: true,
          max: 60
        },
      }]
    },
    legend: {
      position: 'right',
      reverse: true
    }
  }
  return({data: {labels: chartLabels, datasets: chartDatasets}, options: chartOptions})
}

//Calc illiquidityRatio
calcIlliquidRatio();
// Create Chart
let chartLiquidity = new Chart.Bar("chartLiquidity", setupChartLiquidity());

  // Append updateData function to chart variable
chartLiquidity.updateData = function() {
  calcIlliquidNew();
  calcIlliquidRatio();
  chartLiquidity.data.datasets[0].data = illiquidRatioLower;
  chartLiquidity.data.datasets[1].data = illiquidRatioTarget;
  chartLiquidity.data.datasets[2].data = illiquidRatioUpper;
  for (var il=0; il<ilMax; il++) {
    chartLiquidity.data.datasets[il+3].data = illiquidityRatio[il];
  }
  chartLiquidity.update()
}
