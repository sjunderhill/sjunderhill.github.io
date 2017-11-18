function setupChartIlliquidCallDist_New() {

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
      data: illiquidNewCall[il],
      stack: 1
    }
    chartDatasets[il*2+1] = {
      label: labelIlliquids[il] + ' - Dist',  // Series labels
      backgroundColor: coloursWTW[2][il],
      borderColor: coloursWTW[2][il],
      borderWidth: 1,
      data: illiquidNewDist[il],
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
          suggestedMax: 150,
          suggestedMin: -150,
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
let chartIlliquidCallDist_New = new Chart.Bar("chartIlliquidCallDist_New", setupChartIlliquidCallDist_New())

  // Append updateData function to chart variable
chartIlliquidCallDist_New.updateData = function() {
  calcIlliquidNew();
  for (var il=0; il<ilMax; il++) {
    chartIlliquidCallDist_New.data.datasets[il*2].data = illiquidNewCall[il];
    chartIlliquidCallDist_New.data.datasets[il*2+1].data = illiquidNewDist[il];
  }
  chartIlliquidCallDist_New.update()
}
