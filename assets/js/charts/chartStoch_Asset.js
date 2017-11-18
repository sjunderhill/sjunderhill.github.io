const ctxStoch_Asset = document.getElementById("chartStoch_Asset");

var datasetsStochAsset = [];

datasetsStochAsset[0] =
  {
    label: "",
    fill: false,
    backgroundColor: coloursStoch[0],
    borderColor: coloursStoch[0],
    borderWidth: 0,
    pointRadius: 0,
    data: dataStochAsset[0],
    //fillBetweenSet: 0,
    //fillBetweenColor: coloursStoch[0]
  }
for (var i=1; i<=4; i++) {
  datasetsStochAsset[i] =
    {
      label: labelPercentile[i],
      fill: false,
      backgroundColor: coloursStoch[i],
      borderColor: coloursStoch[i],
      borderWidth: 1,
      pointRadius: 0,
      data: dataStochAsset[i],
      fillBetweenSet: i-1,
      fillBetweenColor: coloursStoch[i],
    }
}

let chartStoch_Asset = new Chart(ctxStoch_Asset, {
  type: 'line',
  data: {
    labels: labelDates,
    datasets: datasetsStochAsset
      },
  options: {
    title: {
      display: true,
      text: 'Projected Assets - Distribution',
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
          //max: 300
          callback: function(value, index, values) {
            return value.toLocaleString("en-US");
          }
        }
      }],
      xAxes: [{
        ticks: {
          max: 7,
          }
      }
      ]
    },
    legend: {
      position: 'right',
      reverse: true
    }
  }
});
