function setupChartAssetCat() {

  var chartLabels = labelDates  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  for (var c=0; c<cMax; c++) {
    chartDatasets[c] = {
      label: labelCat[c],  // Series labels
      backgroundColor: colours[c],
      borderColor: colours[c],
      borderWidth: 1,
      data: assetInvTimingContsCat[invSelect][timingSelect][contSelect][c],
    }
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Projected Assets - Split by Category',
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
let chartAsset_Cat = new Chart.Bar("chartAsset_Cat", setupChartAssetCat())

  // Append updateData function to chart variable
chartAsset_Cat.updateData = function() {
  for (var c=0; c<cMax; c++) {
    chartAsset_Cat.data.datasets[c].data = assetInvTimingContsCat[invSelect][timingSelect][contSelect][c]
  }
  chartAsset_Cat.update()
}
