/* ==========================================
   GOOGLE FONT & RESET
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#0f172a;
    color:#fff;
    overflow-x:hidden;
}

/* ==========================================
   CUSTOM SCROLLBAR
========================================== */

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-track{
    background:#111827;
}

::-webkit-scrollbar-thumb{
    background:#2563eb;
    border-radius:10px;
}

::-webkit-scrollbar-thumb:hover{
    background:#1d4ed8;
}

/* ==========================================
   LOADER
========================================== */

#loader{
    position:fixed;
    width:100%;
    height:100%;
    background:#0f172a;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

.spinner{
    width:70px;
    height:70px;
    border:6px solid rgba(255,255,255,.15);
    border-top:6px solid #3b82f6;
    border-radius:50%;
    animation:spin 1s linear infinite;
}

@keyframes spin{

    100%{
        transform:rotate(360deg);
    }

}

/* ==========================================
   NAVBAR
========================================== */

nav{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    padding:18px 8%;

    display:flex;

    justify-content:space-between;

    align-items:center;

    background:rgba(15,23,42,.75);

    backdrop-filter:blur(15px);

    z-index:999;

    border-bottom:1px solid rgba(255,255,255,.08);

}

.logo{

    font-size:26px;

    font-weight:700;

    color:#3b82f6;

}

.logo i{

    margin-right:8px;

}

nav ul{

    display:flex;

    list-style:none;

    gap:35px;

}

nav ul li a{

    color:white;

    text-decoration:none;

    font-size:16px;

    transition:.3s;

}

nav ul li a:hover{

    color:#3b82f6;

}

#themeToggle{

    width:45px;

    height:45px;

    border:none;

    border-radius:50%;

    background:#2563eb;

    color:white;

    cursor:pointer;

    transition:.3s;

}

#themeToggle:hover{

    transform:rotate(180deg);

}

/* ==========================================
   HERO SECTION
========================================== */

header{

    min-height:100vh;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:120px 8%;

    gap:60px;

    background:linear-gradient(135deg,#0f172a,#111827,#1e293b);

}

.hero-left{

    flex:1;

}

.hero-left h3{

    color:#60a5fa;

    font-size:24px;

}

.hero-left h1{

    font-size:65px;

    margin:15px 0;

}

.hero-left span{

    color:#3b82f6;

}

.hero-left h2{

    color:#38bdf8;

    margin-bottom:20px;

    min-height:40px;

}

.hero-left p{

    font-size:18px;

    line-height:1.8;

    color:#d1d5db;

    margin-bottom:30px;

}

/* ==========================================
   BUTTONS
========================================== */

.hero-buttons{

    display:flex;

    gap:20px;

    margin-bottom:35px;

}

.btn{

    padding:14px 28px;

    background:#2563eb;

    color:white;

    text-decoration:none;

    border-radius:50px;

    transition:.4s;

    font-weight:600;

}

.btn:hover{

    transform:translateY(-5px);

    box-shadow:0 12px 30px rgba(37,99,235,.45);

}

.btn-outline{

    background:transparent;

    border:2px solid #3b82f6;

}

.btn-outline:hover{

    background:#2563eb;

}

/* ==========================================
   SOCIAL ICONS
========================================== */

.social-icons{

    display:flex;

    gap:18px;

}

.social-icons a{

    width:50px;

    height:50px;

    display:flex;

    justify-content:center;

    align-items:center;

    border-radius:50%;

    background:rgba(255,255,255,.08);

    color:white;

    text-decoration:none;

    font-size:22px;

    transition:.4s;

}

.social-icons a:hover{

    background:#2563eb;

    transform:translateY(-8px);

}

/* ==========================================
   PROFILE IMAGE
========================================== */

.hero-right{

    flex:1;

    display:flex;

    justify-content:center;

}

.profile-card{

    width:420px;

    height:420px;

    border-radius:50%;

    padding:10px;

    background:linear-gradient(45deg,#2563eb,#06b6d4);

    animation:float 4s ease-in-out infinite;

}

.profile-card img{

    width:100%;

    height:100%;

    object-fit:cover;

    border-radius:50%;

    border:8px solid #0f172a;

}

@keyframes float{

    0%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-20px);
    }

    100%{
        transform:translateY(0);
    }

}
/* ==========================================
   SECTION TITLE
========================================== */

section{
    padding:90px 8%;
}

.section-title{

    text-align:center;

    font-size:42px;

    margin-bottom:60px;

    color:#3b82f6;

    position:relative;

}

.section-title::after{

    content:"";

    width:90px;

    height:4px;

    background:#06b6d4;

    position:absolute;

    bottom:-15px;

    left:50%;

    transform:translateX(-50%);

    border-radius:20px;

}

/* ==========================================
   ABOUT
========================================== */

.about-container{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:30px;

}

.about-card{

    background:rgba(255,255,255,.05);

    backdrop-filter:blur(15px);

    padding:35px;

    border-radius:20px;

    text-align:center;

    transition:.4s;

    border:1px solid rgba(255,255,255,.08);

}

.about-card:hover{

    transform:translateY(-12px);

    box-shadow:0 20px 40px rgba(37,99,235,.25);

}

.about-card i{

    font-size:55px;

    color:#3b82f6;

    margin-bottom:20px;

}

.about-card h3{

    margin-bottom:15px;

}

.about-card p{

    color:#d1d5db;

    line-height:1.8;

}

/* ==========================================
   STATS
========================================== */

.stats{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

    gap:30px;

}

.stat{

    background:rgba(255,255,255,.05);

    backdrop-filter:blur(12px);

    text-align:center;

    padding:40px;

    border-radius:20px;

    transition:.4s;

}

.stat:hover{

    transform:translateY(-10px);

    box-shadow:0 20px 40px rgba(0,0,0,.3);

}

.stat i{

    font-size:45px;

    color:#06b6d4;

    margin-bottom:20px;

}

.stat h2{

    font-size:45px;

    color:#3b82f6;

}

.stat p{

    margin-top:10px;

    color:#d1d5db;

}

/* ==========================================
   PROJECTS
========================================== */

.project-container{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(360px,1fr));

    gap:35px;

}

.project-card{

    overflow:hidden;

    border-radius:25px;

    background:#1e293b;

    transition:.5s;

    border:1px solid rgba(255,255,255,.08);

}

.project-card:hover{

    transform:translateY(-15px);

    box-shadow:0 20px 45px rgba(37,99,235,.30);

}

.project-card img{

    width:100%;

    height:240px;

    object-fit:cover;

    transition:.5s;

}

.project-card:hover img{

    transform:scale(1.08);

}

.project-content{

    padding:30px;

}

.project-content h3{

    margin-bottom:18px;

    color:#60a5fa;

}

.project-content p{

    color:#d1d5db;

    line-height:1.8;

}

.tech{

    margin:25px 0;

}

.tech span{

    display:inline-block;

    background:#2563eb;

    padding:8px 18px;

    border-radius:30px;

    margin:5px;

    font-size:14px;

}

.project-btn{

    display:flex;

    gap:15px;

}

/* ==========================================
   SKILLS
========================================== */

#skills canvas{

    max-width:700px;

    margin:40px auto;

    display:block;

}

.skill-list{

    display:flex;

    flex-wrap:wrap;

    justify-content:center;

    gap:18px;

    margin-top:40px;

}

.skill-list span{

    padding:12px 22px;

    background:#2563eb;

    border-radius:30px;

    transition:.3s;

}

.skill-list span:hover{

    background:#06b6d4;

    transform:scale(1.08);

}

/* ==========================================
   EXPERIENCE & EDUCATION
========================================== */

.timeline,
.edu-card{

    max-width:900px;

    margin:auto;

}

.timeline-box,
.edu-card{

    background:rgba(255,255,255,.05);

    padding:35px;

    border-radius:20px;

    border-left:6px solid #2563eb;

    margin-bottom:30px;

    transition:.4s;

}

.timeline-box:hover,
.edu-card:hover{

    transform:translateX(10px);

}

/* ==========================================
   CONTACT
========================================== */

.contact-container{

    display:flex;

    justify-content:center;

    gap:30px;

    flex-wrap:wrap;

}

.contact-container a{

    text-decoration:none;

    color:white;

    padding:18px 28px;

    background:#1e293b;

    border-radius:50px;

    transition:.4s;

}

.contact-container a:hover{

    background:#2563eb;

    transform:translateY(-8px);

}

.contact-container i{

    margin-right:10px;

}

/* ==========================================
   FOOTER
========================================== */

footer{

    text-align:center;

    padding:35px;

    background:#020617;

    color:#94a3b8;

}
/* ==========================================
   ANIMATIONS
========================================== */

.fade-up{
    opacity:0;
    transform:translateY(60px);
    transition:all .8s ease;
}

.fade-up.show{
    opacity:1;
    transform:translateY(0);
}

.zoom{
    opacity:0;
    transform:scale(.8);
    transition:all .8s ease;
}

.zoom.show{
    opacity:1;
    transform:scale(1);
}

/* ==========================================
   HOVER GLOW EFFECT
========================================== */

.project-card,
.about-card,
.stat,
.timeline-box,
.edu-card{

    position:relative;

}

.project-card::before,
.about-card::before,
.stat::before{

    content:"";

    position:absolute;

    top:0;

    left:-100%;

    width:100%;

    height:100%;

    background:linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.12),
        transparent
    );

    transition:.8s;

}

.project-card:hover::before,
.about-card:hover::before,
.stat:hover::before{

    left:100%;

}

/* ==========================================
   GLASS EFFECT
========================================== */

.about-card,
.stat,
.project-card,
.timeline-box,
.edu-card{

    backdrop-filter:blur(18px);

    -webkit-backdrop-filter:blur(18px);

}

/* ==========================================
   BUTTON EFFECT
========================================== */

.btn{

    position:relative;

    overflow:hidden;

}

.btn::after{

    content:"";

    position:absolute;

    width:0;

    height:100%;

    top:0;

    left:0;

    background:rgba(255,255,255,.15);

    transition:.5s;

}

.btn:hover::after{

    width:100%;

}

/* ==========================================
   IMAGE SHADOW
========================================== */

.project-card img{

    box-shadow:0 10px 30px rgba(0,0,0,.25);

}

/* ==========================================
   DARK MODE
========================================== */

body.light{

    background:#f8fafc;

    color:#111827;

}

body.light nav{

    background:rgba(255,255,255,.85);

}

body.light .about-card,
body.light .stat,
body.light .project-card,
body.light .timeline-box,
body.light .edu-card{

    background:white;

    color:#111827;

}

body.light p{

    color:#374151;

}

body.light footer{

    background:#e5e7eb;

    color:#374151;

}

/* ==========================================
   RESPONSIVE
========================================== */

@media(max-width:1024px){

header{

    flex-direction:column-reverse;

    text-align:center;

}

.hero-buttons{

    justify-content:center;

}

.social-icons{

    justify-content:center;

}

.hero-left h1{

    font-size:52px;

}

.profile-card{

    width:340px;

    height:340px;

}

}

@media(max-width:768px){

nav{

    flex-direction:column;

    gap:20px;

    padding:18px;

}

nav ul{

    flex-wrap:wrap;

    justify-content:center;

    gap:15px;

}

.hero-left h1{

    font-size:42px;

}

.hero-left h2{

    font-size:24px;

}

.hero-left p{

    font-size:16px;

}

.profile-card{

    width:280px;

    height:280px;

}

.project-container{

    grid-template-columns:1fr;

}

.contact-container{

    flex-direction:column;

    align-items:center;

}

}

@media(max-width:480px){

.hero-left h1{

    font-size:34px;

}

.hero-left h3{

    font-size:20px;

}

.section-title{

    font-size:32px;

}

.btn{

    width:100%;

    text-align:center;

}

.hero-buttons{

    flex-direction:column;

}

.stat h2{

    font-size:34px;

}

}

/* ==========================================
   END
========================================== */
