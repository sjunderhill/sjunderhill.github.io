function setupChartInvret_Opt() {

  var chartLabels = labelOpt  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  chartDatasets[0] = {
    label: labelInv[0],
    backgroundColor: colours[0],
    borderColor: colours[0],
    borderWidth: 1,
    data: invretInvTaxOpt[0][taxSelect],
  }
  chartDatasets[1] = {
    label: labelInv[invSelect],
    backgroundColor: colours[2],
    borderColor: colours[2],
    borderWidth: 1,
    data: invretInvTaxOpt[invSelect][taxSelect],
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Investment Returns by Asset Class - Base vs Alternative',
      fullWidth: false
    },
    showLines: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Investment Return (%)"
        },
        stacked: false,
        ticks: {
          beginAtZero: true,
          min: -80,
          max: 40,
          callback: function(value, index, values) {
            return value.toLocaleString("en-US");
          }
        }
      }]
    },
    legend: {
      display: false,
      position: 'right',
      reverse: false
    }
  }
  return({data: {labels: chartLabels, datasets: chartDatasets}, options: chartOptions})
}

// Create Chart
let chartInvret_Opt = new Chart.Bar("chartInvret_Opt", setupChartInvret_Opt())

  // Append updateData function to chart variable
chartInvret_Opt.updateData = function() {
  chartInvret_Opt.data.datasets[0].data = invretInvTaxOpt[0][taxSelect];
  chartInvret_Opt.data.datasets[1].data = invretInvTaxOpt[invSelect][taxSelect];
  chartInvret_Opt.update();
}
