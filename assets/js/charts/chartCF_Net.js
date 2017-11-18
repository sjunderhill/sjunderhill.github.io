var cfTot = Array2d(3,tMax-1)

cfTot = Array2d(3,tMax-1);
for (t=0; t<tMax; t++) {
  for (cf=0; cf<cfIncMax; cf++) {
    cfTot[0][t] += cfIncInvTimingContsCF[invSelect][timingSelect][contSelect][cf][t]
  }
  for (cf=0; cf<cfExpMax; cf++) {
    cfTot[1][t] += cfExpInvTimingContsCF[invSelect][timingSelect][contSelect][cf][t]
  }
  cfTot[2][t] = cfTot[0][t] - cfTot[1][t]
}

function setupChartCFNet() {

  var chartLabels = labelFYs  // xAxis label array
  var chartDatasets = []
  var chartOptions

  // Create chart datasets
  for (var cf=0; cf<3; cf++) {
    chartDatasets[cf] = {
      type: 'line',
      label: labelCFTot[cf],  // Series labels
      fill: false,
      backgroundColor: coloursCFTot[cf],
      borderColor: coloursCFTot[cf],
      borderWidth: 2,
      pointRadius: 0,
      data: cfTot[cf],
      stack: 1
    }
  }
  chartDatasets[3] = { // Blank data set to keep bar chart format
      type: 'bar',
      label: "",
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(255,255,255,0)',
      data: "",
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
        stacked: false,
        ticks: {
          beginAtZero: true,
          min: -400,
          max: 700,
          callback: function(value, index, values) {
            return value.toLocaleString("en-US");
          }
        }
      }]
    },
    legend: {
      position: 'right',
      reverse: false
    }
  }
  return({data: {labels: chartLabels, datasets: chartDatasets}, options: chartOptions})
}

// Create Chart
let chartCF_Net = new Chart.Bar("chartCF_Net", setupChartCFNet())

  // Append updateData function to chart variable
chartCF_Net.updateData = function() {
  cfTot = Array2d(3,tMax-1);
  for (t=0; t<tMax-1; t++) {
    for (cf=0; cf<cfIncMax; cf++) {
      cfTot[0][t] += cfIncInvTimingContsCF[invSelect][timingSelect][contSelect][cf][t]
    }
    for (cf=0; cf<cfExpMax; cf++) {
      cfTot[1][t] += cfExpInvTimingContsCF[invSelect][timingSelect][contSelect][cf][t]
    }
    cfTot[2][t] = cfTot[0][t] - cfTot[1][t]
  }
  console.log(cfTot);
  for (cf=0; cf<3; cf++) {
    chartCF_Net.data.datasets[cf].data = cfTot[cf]
  }
  chartCF_Net.update()
}
