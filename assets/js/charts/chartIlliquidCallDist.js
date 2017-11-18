function setupChartIlliquidCallDist() {

  var chartLabels = labelFYs  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  for (var il=0; il<ilMax; il++) {
    chartDatasets[il*2] = {
      label: labelIlliquids[il] + ' - Calls',  // Series labels
      backgroundColor: coloursWTW[1][il],
      borderColor: coloursWTW[1][il],
      borderWidth: 1,
      data: illiquidCall[il],
      stack: 1
    }
    chartDatasets[il*2+1] = {
      label: labelIlliquids[il] + ' - Dist',  // Series labels
      backgroundColor: coloursWTW[2][il],
      borderColor: coloursWTW[2][il],
      borderWidth: 1,
      data: illiquidDist[il],
      stack: 1
    }
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Projected Income & Expenditure',
      fullWidth: false
    },
    showLines: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Assets ($m)"
        },
        stacked: true,
        ticks: {
          beginAtZero: true,
          //suggestedMax: 200,
          callback: function(value, index, values) {
            return value.toLocaleString("en-US");
          }
        }
      }]
    },
    legend: {
      position: 'right',
    }
  }
  return({data: {labels: chartLabels, datasets: chartDatasets}, options: chartOptions})
}

// Create Chart
let chartIlliquidCallDist = new Chart.Bar("chartIlliquidCallDist", setupChartIlliquidCallDist())

  // Append updateData function to chart variable
chartIlliquidCallDist.updateData = function() {
  for (var il=0; il<ilMax; il++) {
    chartIlliquidCallDist.data.datasets[il*2].data = illiquidCall[il];
    chartIlliquidCallDist.data.datasets[il*2+1].data = illiquidDist[il];
  }
  chartIlliquidCallDist.update()
}
