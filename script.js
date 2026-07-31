// =======================================
// LOADER
// =======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

// =======================================
// TYPING ANIMATION
// =======================================

const words = [

    "Data Analyst",

    "Power BI Developer",

    "SQL Enthusiast",

    "Python Programmer",

    "Excel Expert"

];

let wordIndex = 0;

let charIndex = 0;

let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (typing) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            typing = false;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            typing = true;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, typing ? 90 : 40);

}

typeEffect();

// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =======================================
// COUNTER
// =======================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 80);

                if (count < target) {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));

// =======================================
// CHART
// =======================================

const ctx = document.getElementById("skillsChart");

if (ctx) {

new Chart(ctx,{

type:"radar",

data:{

labels:[

"Power BI",

"SQL",

"Python",

"Excel",

"Pandas",

"NumPy",

"DAX",

"Git"

],

datasets:[{

label:"Skill Level",

data:[95,90,88,95,85,82,80,85],

backgroundColor:"rgba(59,130,246,.25)",

borderColor:"#38bdf8",

pointBackgroundColor:"#06b6d4",

borderWidth:3

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

r:{

angleLines:{

color:"#555"

},

grid:{

color:"#444"

},

pointLabels:{

color:"white"

},

ticks:{

display:false

}

}

}

}

});

}

// =======================================
// SCROLL REVEAL
// =======================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// =======================================
// ACTIVE NAV LINK
// =======================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-180;

if(pageYOffset>=top){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =======================================
// DARK MODE
// =======================================

const themeBtn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML="🌙";

}

});

// =======================================
// BACK TO TOP
// =======================================

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =======================================
// GREETING
// =======================================

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="☀ Good Morning";

}

else if(hour<18){

greeting="🌤 Good Afternoon";

}

else{

greeting="🌙 Good Evening";

}

console.log(greeting+" Neha!");

// =======================================
// BUTTON RIPPLE EFFECT
// =======================================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
