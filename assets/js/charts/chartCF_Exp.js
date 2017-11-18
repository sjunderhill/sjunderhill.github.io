function setupChartCFExp() {

  var chartLabels = labelFYs  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  for (var cf=0; cf<cfExpMax; cf++) {
    chartDatasets[cf] = {
      label: labelCFExp[cf],  // Series labels
      backgroundColor: coloursExp[cf],
      borderColor: coloursExp[cf],
      borderWidth: 1,
      data: cfExpInvTimingContsCF[invSelect][timingSelect][contSelect][cf],
    }
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Projected Expenditure',
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
let chartCF_Exp = new Chart.Bar("chartCF_Exp", setupChartCFExp())

  // Append updateData function to chart variable
chartCF_Exp.updateData = function() {
  for (var cf=0; cf<cfExpMax; cf++) {
    chartCF_Exp.data.datasets[cf].data = cfExpInvTimingContsCF[invSelect][timingSelect][contSelect][cf]
  }
  chartCF_Exp.update()
}
