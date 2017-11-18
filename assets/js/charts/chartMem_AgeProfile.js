const ctxMem_AgeProfile = document.getElementById("chartMem_AgeProfile");

var iAgeProfileYear = 1;

let chartMem_AgeProfile = new Chart(ctxMem_AgeProfile, {
  type: 'bar',
  data: {
    labels: labelAges,
    datasets: [
        {
            label: "Active - Current",
            backgroundColor: colours[0],
            borderColor: colours[0],
            borderWidth: 1,
            data: resultMemCXT[0][iAgeProfileYear],
        },
        {
            label: "Active - New",
            backgroundColor: colours[1],
            borderColor: colours[1],
            borderWidth: 1,
            data: resultMemCXT[1][iAgeProfileYear],
        },
        {
            label: "Inactive",
            lineTension: 0.2,
            backgroundColor: colours[2],
            borderColor: colours[2],
            borderWidth: 1,
            data: resultMemCXT[2][iAgeProfileYear],
        },
        {
            label: "Pensioner",
            backgroundColor: colours[3],
            borderColor: colours[3],
            borderWidth: 1,
            data: resultMemCXT[3][iAgeProfileYear],
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Member Age Profile - ' + labelDates[iAgeProfileYear],
          fullWidth: false
        },
        showLines: true,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Members"
            },
            stacked: true,
            ticks: {
              beginAtZero: true,
              min:0,
              max: 1200,
              callback: function(value, index, values) {
                return value.toLocaleString("en-US");
              }
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Age"
            },
            ticks: {
              maxRotation: 0,
              min: 15,
              autoSkip: true,
              autoSkipPadding: 10,
            },
          }]
        },
        legend: {
          position: 'right'
        }
      }
});
