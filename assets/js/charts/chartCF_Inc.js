function setupChartCFInc() {

  var chartLabels = labelFYs  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  for (var cf=0; cf<cfIncMax; cf++) {
    chartDatasets[cf] = {
      label: labelCFInc[cf],  // Series labels
      backgroundColor: coloursInc[cf],
      borderColor: coloursInc[cf],
      borderWidth: 1,
      data: cfIncInvTimingContsCF[invSelect][timingSelect][contSelect][cf],
    }
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Projected Income',
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
          max: 700,
          callback: function(value, index, values) {
            return value.toLocaleString("en-US");
          }
        }
      }]
    },
    legend: {
      position: 'right',
      reverse: true
    }
  }
  return({data: {labels: chartLabels, datasets: chartDatasets}, options: chartOptions})
}

// Create Chart
let chartCF_Inc = new Chart.Bar("chartCF_Inc", setupChartCFInc())

  // Append updateData function to chart variable
chartCF_Inc.updateData = function() {
  for (var cf=0; cf<cfIncMax; cf++) {
    chartCF_Inc.data.datasets[cf].data = cfIncInvTimingContsCF[invSelect][timingSelect][contSelect][cf]
  }
  chartCF_Inc.update()
}
