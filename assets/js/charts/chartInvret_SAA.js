const ctxInvret_SAA = document.getElementById("chartInvret_SAA");

var datasetsInvretSAA = [];
for (var i=0; i<labelAssetClass.length; i++)
{
  datasetsInvretSAA[i] =
    {
      label: labelAssetClass[i],
      backgroundColor: coloursBlueRed[i],
      borderColor: coloursBlueRed[i],
      borderWidth: 1,
      data: saaClassOpt[i],
    }
};

let chartInvret_SAA = new Chart(ctxInvret_SAA, {
  type: 'bar',
  data: {
    labels: labelOpt,
    datasets: datasetsInvretSAA,
  },
  options: {
    title: {
      display: true,
      text: 'Asset Allocation by Option',
      fullWidth: false
    },
    showLines: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Investment Return (%)"
        },
        stacked: true,
        ticks: {
          beginAtZero: true,
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
});
