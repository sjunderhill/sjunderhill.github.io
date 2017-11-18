function setupChartAssetComp() {

  var chartLabels = labelDates  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
    chartDatasets[0] = {
      label: labelInv[0],  // Series labels
      backgroundColor: colours[0],
      borderColor: colours[0],
      borderWidth: 1,
      data: assetInvTimingConts[0][0][0],
    }
    chartDatasets[1] = {
      label: labelInv[invSelect],  // Series labels
      backgroundColor: colours[1],
      borderColor: colours[1],
      borderWidth: 1,
      data: assetInvTimingConts[invSelect][timingSelect][contSelect],
    }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Projected Assets - Base vs Alternative',
      fullWidth: false
    },
    showLines: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Assets ($m)"
        },
        stacked: false,
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
      display: false,
      position: 'right',
      reverse: true
    }
  }
  return({data: {labels: chartLabels, datasets: chartDatasets}, options: chartOptions})
}

// Create Chart
let chartAsset_Comp = new Chart.Bar("chartAsset_Comp", setupChartAssetComp())

  // Append updateData function to chart variable
  chartAsset_Comp.updateData = function() {
  chartAsset_Comp.data.datasets[1].data = assetInvTimingConts[invSelect][timingSelect][contSelect];
  chartAsset_Comp.update()
}
