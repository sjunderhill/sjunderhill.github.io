function setupChartAssetOpt() {

  var chartLabels = labelDates  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  for (var o=0; o<oMax; o++) {
    chartDatasets[o] = {
      label: labelOpt[o],  // Series labels
      backgroundColor: colours[o],
      borderColor: colours[o],
      borderWidth: 1,
      data: assetInvTimingContsOpt[invSelect][timingSelect][contSelect][o],
    }
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Projected Assets - Split by Investment Option',
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
          max: 10000,
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
let chartAsset_Opt = new Chart.Bar("chartAsset_Opt", setupChartAssetOpt())

  // Append updateData function to chart variable
chartAsset_Opt.updateData = function() {
  for (var o=0; o<oMax; o++) {
    chartAsset_Opt.data.datasets[o].data = assetInvTimingContsOpt[invSelect][timingSelect][contSelect][o]
  }
  chartAsset_Opt.update()
}
