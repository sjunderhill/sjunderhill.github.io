const ctxMem_Cat = document.getElementById("chartMem_Cat");

let chartMem_Cat = new Chart(ctxMem_Cat, {
  type: 'bar',
  data: {
    labels: labelDates,
    datasets: [
        {
            label: "Active - Current",
            backgroundColor: colours[act],
            borderColor: colours[act],
            borderWidth: 1,
            data: resultMemCT[0],
            spanGaps: false,
        },
        {
            label: "Active - New",
            backgroundColor: colours[actn],
            borderColor: colours[actn],
            borderWidth: 1,
            data: resultMemCT[1],
            spanGaps: false,
        },
        {
            label: "Inactive",
            lineTension: 0.2,
            backgroundColor: colours[ina],
            borderColor: colours[ina],
            borderWidth: 1,
            data: resultMemCT[2],
        },
        {
            label: "Pensioner",
            backgroundColor: colours[pen],
            borderColor: colours[pen],
            borderWidth: 1,
            data: resultMemCT[3],
        }
        ]
      },
          options: {
            title: {
              display: true,
              text: 'Projected Membership - Split by Category',
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
                  max: 50000,
                  callback: function(value, index, values) {
                    return value.toLocaleString("en-US");
                  }
                }
              }]
            },
            legend: {
              position: 'right'
            }
          }
});
