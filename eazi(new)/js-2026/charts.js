const ctxListing = document.getElementById("chart-listing");
const ctxEmail = document.getElementById("chart-email");
const ctxHistory = document.getElementById("chart-history");
const ctxOffer = document.getElementById("chart-offers");
const ctxViews = document.getElementById("chart-views");

new Chart(ctxListing, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "P24",
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 58, 60],
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Eazi",
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 58],
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Facebook",
        data: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 52],
        backgroundColor: "#36a2eb",
        borderColor: "#36a2eb",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: -60,
        max: 60,
        title: {
          display: true,
          text: "Value",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxHeight: 6,
          boxWidth: 6,
          padding: 10,
        },
      },
    },
  },
});
new Chart(ctxEmail, {
  type: "bar",
  data: {
    labels: ["q1", "q2", "q3", "q4"],
    datasets: [
      {
        label: "Email Alerts",
        data: [5, 12, 8, 10],
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 15,
        title: {
          display: true,
          text: "Alerts",
        },
      },
      x: {
        title: {
          display: true,
          text: "Quarter",
        },
      },
    },
    plugins: {
      legend: false,
    },
  },
});

new Chart(ctxHistory, {
  type: "bar",
  data: {
    labels: ["q1", "q2", "q3", "q4"],
    datasets: [
      {
        label: "P24",
        data: [10, 20, 30, 40], // Estimated values based on image
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderWidth: 1,
        stack: "Stack 0",
      },
      {
        label: "Eazi",
        data: [-20, -10, 0, 10], // Estimated values based on image
        backgroundColor: "#36a2eb",
        borderColor: "#36a2eb",
        borderWidth: 1,
        stack: "Stack 0",
      },
      {
        label: "Private Prop",
        data: [-30, -20, -10, 0], // Estimated values based on image
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        borderWidth: 1,
        stack: "Stack 0",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: -60,
        max: 60,
        title: {
          display: true,
          text: "Value",
        },
        stacked: true,
      },
      x: {
        title: {
          display: true,
          text: "Quarter",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxHeight: 6,
          boxWidth: 6,
          padding: 10,
        },
      },
    },
  },
});
new Chart(ctxOffer, {
  type: "bar",
  data: {
    labels: ["q1", "q2", "q3", "q4"],
    datasets: [
      {
        label: "P24",
        data: [10, 20, 30, 40], // Estimated values based on image
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderWidth: 1,
        stack: "Stack 0",
      },

      {
        label: "Private Prop",
        data: [-30, -20, -10, 0], // Estimated values based on image
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        borderWidth: 1,
        stack: "Stack 0",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: -60,
        max: 60,
        title: {
          display: true,
          text: "Value",
        },
        stacked: true,
      },
      x: {
        title: {
          display: true,
          text: "Quarter",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxHeight: 6,
          boxWidth: 6,
          padding: 10,
        },
      },
    },
  },
});
new Chart(ctxViews, {
  type: "bar",
  data: {
    labels: ["q1", "q2", "q3", "q4"],
    datasets: [
      {
        label: "P24",
        data: [10, 20, 30, 40], // Estimated values based on image
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderWidth: 1,
        stack: "Stack 0",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 60,
        title: {
          display: true,
          text: "Value",
        },
        stacked: true,
      },
      x: {
        title: {
          display: true,
          text: "Quarter",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxHeight: 6,
          boxWidth: 6,
          padding: 10,
        },
      },
    },
  },
});
