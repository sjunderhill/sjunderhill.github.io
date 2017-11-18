const ctxStoch_CF = document.getElementById("chartStoch_CF");

var datasetsStochCF = [];

datasetsStochCF[0] =
  {
    label: "",
    fill: false,
    backgroundColor: coloursStoch[0],
    borderColor: coloursStoch[0],
    borderWidth: 0,
    pointRadius: 0,
    data: dataStochCF[0],
    //fillBetweenSet: 0,
    //fillBetweenColor: coloursStoch[0]
  }
for (var i=1; i<=4; i++) {
  datasetsStochCF[i] =
    {
      label: labelPercentile[i],
      fill: false,
      backgroundColor: coloursStoch[i],
      borderColor: coloursStoch[i],
      borderWidth: 1,
      pointRadius: 0,
      data: dataStochCF[i],
      fillBetweenSet: i-1,
      fillBetweenColor: coloursStoch[i],
    }
}

let chartStoch_CF = new Chart(ctxStoch_CF, {
  type: 'line',
  data: {
    labels: labelDates,
    datasets: datasetsStochCF
      },
  options: {
    title: {
      display: true,
      text: 'Projected Net Cashflows - Distribution',
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
