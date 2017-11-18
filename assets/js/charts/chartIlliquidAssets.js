function setupChartIlliquidAssets() {

  var chartLabels = labelDates  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets

  chartDatasets[0] = {
    type: 'line',
    label: labelIlliquids[5],
    fill: false,
    backgroundColor: "rgba(240,161,9,1)",
    borderColor: "rgba(240,161,9,1)",
    borderWidth: 3,
    data: illiquidAssetsLower,
    pointRadius: 0,
    hidden: true,
  }
  chartDatasets[1] = {
    type: 'line',
    label: labelIlliquids[6],
    fill: false,
    backgroundColor: "rgba(240,161,9,1)",
    borderColor: "rgba(240,161,9,1)",
    borderWidth: 3,
    data: illiquidAssetsTarget,
    pointRadius: 0,
    hidden: true,
  }
  chartDatasets[2] = {
    type: 'line',
    label: labelIlliquids[7],
    fill: false,
    backgroundColor: "rgba(129,197,62,1)",
    borderColor: "rgba(129,197,62,1)",
    borderWidth: 3,
    data: illiquidAssetsUpper,
    pointRadius: 0,
    hidden: true,
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
      data: illiquidAssetsInvTimingClass[invSelect][timingSelect][il],
    }
  }
  chartDatasets[ilMax+3] = {
    type: 'bar',
    label: labelIlliquids[0] + ' - New',  // Series labels
    backgroundColor: coloursWTW[2][0],
    borderColor: coloursWTW[2][0],
    borderWidth: 1,
    spanGaps: false,
    yAxisID: "bar-y-axis",
    data: illiquidNewNAV[0],
  }

  // Set Chart options
  chartOptions = {
    title: {
      display: true,
      text: 'Value of Illiquid Assets - Split by Asset Class',
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
          //suggestedMax: 2000,
          max: 2500,
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
          //suggestedMax: 2000,
          max: 2500,
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

// Create Chart
calcIlliquidAssetTarget()
let chartIlliquidAssets = new Chart.Bar("chartIlliquidAssets", setupChartIlliquidAssets())

  // Append updateData function to chart variable
chartIlliquidAssets.updateData = function() {
  calcIlliquidAssetTarget()
  chartIlliquidAssets.data.datasets[0].data = illiquidAssetsLower
  chartIlliquidAssets.data.datasets[1].data = illiquidAssetsTarget
  chartIlliquidAssets.data.datasets[2].data = illiquidAssetsUpper
  for (var il=0; il<ilMax; il++) {
    chartIlliquidAssets.data.datasets[il+3].data = illiquidAssetsInvTimingClass[invSelect][timingSelect][il]
  }
  chartIlliquidAssets.update()
}
