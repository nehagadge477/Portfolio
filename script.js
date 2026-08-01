/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/* ==========================================
   TYPING EFFECT
========================================== */

const roles = [

    "Data Analyst",

    "Power BI Developer",

    "SQL Enthusiast",

    "Python Programmer",

    "Excel Expert"

];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 90);

    } else {

        setTimeout(eraseText, 1500);

    }

}

function eraseText() {

    if (charIndex > 0) {

        typing.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 40);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeText, 300);

    }

}

document.addEventListener("DOMContentLoaded", typeText);

/* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 80;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* ==========================================
   DARK MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeToggle.innerHTML = "☀️";

    } else {

        themeToggle.innerHTML = "🌙";

    }

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".about-card, .project-card, .stat, .timeline-box, .edu-card"

);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/* ==========================================
   SKILLS CHART
========================================== */

const ctx = document.getElementById("skillsChart");

if (ctx) {

new Chart(ctx, {

type: "radar",

data: {

labels: [

"Power BI",

"SQL",

"Python",

"Excel",

"Pandas",

"DAX"

],

datasets: [{

label: "Skill Level",

data: [95,90,85,92,82,80],

fill: true,

backgroundColor: "rgba(37,99,235,.2)",

borderColor: "#2563eb",

pointBackgroundColor: "#06b6d4",

borderWidth: 2

}]

},

options: {

responsive: true,

plugins: {

legend: {

labels: {

color: "white"

}

}

},

scales: {

r: {

angleLines: {

color: "#475569"

},

grid: {

color: "#334155"

},

pointLabels: {

color: "white"

},

ticks: {

display: false

}

}

}

}

});

}

/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") == "#" + current) {

link.classList.add("active");

}

});

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

/* ==========================================
   END
========================================== */
