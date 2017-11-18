function setupChartCFIncExp() {

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
      stack: 1
    }
  }
  for (var cf=0; cf<cfExpMax; cf++) {
    chartDatasets[cf+cfIncMax] = {
      label: labelCFExp[cf],  // Series labels
      backgroundColor: coloursExp[cf],
      borderColor: coloursExp[cf],
      borderWidth: 1,
      data: cfExpInvTimingContsCFNeg[invSelect][timingSelect][contSelect][cf],
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
          //beginAtZero: false,
          min: -700,
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
let chartCF_IncExp = new Chart.Bar("chartCF_IncExp", setupChartCFIncExp())

  // Append updateData function to chart variable
chartCF_IncExp.updateData = function() {
  for (var cf=0; cf<cfIncMax; cf++) {
    chartCF_IncExp.data.datasets[cf].data = cfIncInvTimingContsCF[invSelect][timingSelect][contSelect][cf]
  }
  for (var cf=0; cf<cfExpMax; cf++) {
    chartCF_IncExp.data.datasets[cf+cfIncMax].data = cfExpInvTimingContsCF[invSelect][timingSelect][contSelect][cf]
  }
  chartCF_IncExp.update()
}
