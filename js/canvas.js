/*Radar chart*/
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
        labels: ["Fouls", "Steals", "Free Throws", "Three-point shots", "2-point shots"],
        datasets: [{
            label: "MyTeam",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgb(255, 176, 0)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgb(255, 176, 0)",
            data: [12, 1, 10, 5, 30]
        }, {
            label: "Raptors",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgb(227, 0, 52)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgb(227, 0, 52)",
            pointBorderColor: "#fff",
            data: [15, 3, 6, 8, 16]
        }],
    },
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: -20,
                suggestedMax: 30
            }
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
                }
            }
        }
    }
});


new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "My Team",
          backgroundColor: "rgb(255, 176, 0)",
          data: [15,29,50,75]
        }, {
          label: "Raptors",
          backgroundColor: "rgb(227, 0, 52)",
          data: [10,27,42,63]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Points Per Quarter'
      }
    }
});

new Chart(document.getElementById("radar-chart2"), {
    type: 'radar',
    data: {
        labels: ["Fouls", "Steals", "Free Throws", "Three-point shots", "2-point shots"],
        datasets: [{
            label: "MyTeam",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgb(255, 176, 0)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgb(255, 176, 0)",
            data: [18, 2, 8, 6, 20]
        }, {
            label: "Raptors",
            fill: true,
            backgroundColor: "rgb(0, 0, 127,0.2)",
            borderColor: "rgb(0, 0, 127)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgb(0, 0, 127)",
            pointBorderColor: "#fff",
            data: [10, 8, 16, 12, 32]
        }],
    },
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: -20,
                suggestedMax: 30
            }
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
                }
            }
        }
    }
});


new Chart(document.getElementById("bar-chart-grouped2"), {
    type: 'bar',
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "My Team",
          backgroundColor: "rgb(255, 176, 0)",
          data: [12,25,37,59]
        }, {
          label: "Raptors",
          backgroundColor: "rgb(0, 0, 127)",
          data: [23,46,68,80]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Points Per Quarter'
      }
    }
});

new Chart(document.getElementById("radar-chart3"), {
    type: 'radar',
    data: {
        labels: ["Fouls", "Steals", "Free Throws", "Three-point shots", "2-point shots"],
        datasets: [{
            label: "MyTeam",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgb(255, 176, 0)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgb(255, 176, 0)",
            data: [9, 5, 16, 5, 18]
        }, {
            label: "Raptors",
            fill: true,
            backgroundColor: "rgb(120, 120, 120,0.2)",
            borderColor: "rgb(120, 120, 120)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgb(120, 120, 120)",
            pointBorderColor: "#fff",
            data: [8, 6, 12, 15, 20]
        }],
    },
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: -20,
                suggestedMax: 30
            }
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
                }
            }
        }
    }
});


new Chart(document.getElementById("bar-chart-grouped3"), {
    type: 'bar',
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "My Team",
          backgroundColor: "rgb(255, 176, 0)",
          data: [18,36,53,79]
        }, {
          label: "Raptors",
          backgroundColor: "rgb(120, 120, 120)",
          data: [15,35,68,81]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Points Per Quarter'
      }
    }
});