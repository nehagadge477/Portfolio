// Greeting Message
const hours = new Date().getHours();
let greeting = "";

if (hours < 12) greeting = "Good Morning ☀️";
else if (hours < 18) greeting = "Good Afternoon 🌤️";
else greeting = "Good Evening 🌙";

console.log(`${greeting} Welcome to Neha's Data Analytics Portfolio 👩‍💻`);

// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Skills Chart using Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Power BI', 'SQL', 'Python', 'Excel', 'Data Cleaning'],
    datasets: [{
      label: 'Skill Level (%)',
      data: [90, 85, 80, 88, 75],
      backgroundColor: ['#007bff', '#00aaff', '#3399ff', '#66ccff', '#99ddff']
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
