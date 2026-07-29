// ===============================
// Typing Animation
// ===============================

const text = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Enthusiast",
    "Python Programmer",
    "Excel Expert"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;

            count++;

            type();

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


// ===============================
// Smooth Scroll
// ===============================

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({

        behavior: "smooth"

    });

}


// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


// ===============================
// Skills Chart
// ===============================

const ctx = document.getElementById("skillsChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [

            "Power BI",

            "SQL",

            "Python",

            "Excel",

            "Pandas",

            "NumPy",

            "Matplotlib",

            "Git"

        ],

        datasets: [{

            label: "Skill Level",

            data: [

                90,

                88,

                85,

                92,

                80,

                75,

                78,

                82

            ],

            backgroundColor: [

                "#0077ff",

                "#00a2ff",

                "#00c6ff",

                "#4caf50",

                "#ff9800",

                "#9c27b0",

                "#ff5722",

                "#607d8b"

            ],

            borderRadius: 10

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: false

            }

        },

        scales: {

            y: {

                beginAtZero: true,

                max: 100

            }

        }

    }

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ===============================
// Greeting Message
// ===============================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "☀️ Good Morning";

}
else if (hour < 18) {

    greeting = "🌤️ Good Afternoon";

}
else {

    greeting = "🌙 Good Evening";

}

console.log(greeting + " Neha!");


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
