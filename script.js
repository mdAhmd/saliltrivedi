/*==================================================
LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.remove();
        }, 700);

    }

});


/*==================================================
MOBILE MENU
==================================================*/

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("show");

        menuBtn.innerHTML = mobileMenu.classList.contains("show")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("show");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


/*==================================================
STICKY HEADER
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "5px 0";
        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";

    } else {

        header.style.padding = "0";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";

    }

});


/*==================================================
SCROLL PROGRESS
==================================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});


/*==================================================
BACK TO TOP
==================================================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
DARK MODE
==================================================*/

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==================================================
NAV LINK CLICK EFFECT
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});


/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll("button,.primary-btn,.secondary-btn,.call-btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/*==================================================
ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        function update(){

            current += increment;

            if(current < target){

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        }

        update();

        counterObserver.unobserve(counter);

    });

},{
    threshold:.4
});

counters.forEach(counter=>counterObserver.observe(counter));



/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                other.querySelector(".faq-answer").style.maxHeight=null;
                other.querySelector(".faq-question").classList.remove("open");

            }

        });

        question.classList.toggle("open");

        if(answer.style.maxHeight){

            answer.style.maxHeight=null;

        }else{

            answer.style.maxHeight=answer.scrollHeight+"px";

        }

    });

});



/*==================================================
SCROLL REVEAL
==================================================*/

const revealElements=document.querySelectorAll(

".service-card,.why-card,.stat-box,.process-card,.condition-grid div,.testimonial,.contact-card,.gallery-item,.info-box,.about-image,.about-content"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});



/*==================================================
SECTION FADE
==================================================*/

const sectionsFade=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("section-show");

}

});

},{
threshold:.08
});

sectionsFade.forEach(sec=>{

sec.classList.add("section-hidden");

sectionObserver.observe(sec);

});



/*==================================================
FLOATING PARALLAX
==================================================*/

const doctorCard=document.querySelector(".doctor-card");

const floatingCard=document.querySelector(".floating-card");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

if(doctorCard){

doctorCard.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

}

if(floatingCard){

floatingCard.style.transform=`translate(${x/2}px,${y/2}px)`;

}

});



/*==================================================
CARD HOVER TILT
==================================================*/

document.querySelectorAll(

".service-card,.why-card,.testimonial,.contact-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/18);

const rotateY=((rect.width/2-x)/18);

card.style.transform=

`perspective(900px)
rotateX(${-rotateX}deg)
rotateY(${-rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});



/*==================================================
IMAGE HOVER ZOOM
==================================================*/

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(1)";

});

});



/*==================================================
BUTTON GLOW
==================================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.call-btn"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 18px 45px rgba(46,139,192,.35)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});



/*==================================================
PAGE VISIBILITY
==================================================*/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="👨‍⚕️ Come Back | Dr. Salil Trivedi";

}else{

document.title="Dr. Salil Trivedi | General Physician";

}

});



/*==================================================
CONSOLE MESSAGE
==================================================*/

console.log(

"%cWebsite Designed by Kaizenn Services",

"font-size:18px;color:#2E8BC0;font-weight:bold"

);

console.log(

"%cPremium Medical Website Loaded Successfully",

"color:#16a34a;font-size:14px"

);
/*==================================================
APPOINTMENT FORM
==================================================*/

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

appointmentForm.addEventListener("submit", function (e) {

e.preventDefault();

const name = document.getElementById("name").value.trim();

const phone = document.getElementById("phone").value.trim();

const date = document.getElementById("date").value;

const time = document.getElementById("time").value;

const message = document.getElementById("message").value.trim();

if (name.length < 3) {

showToast("Please enter your full name.","error");

return;

}

if (!/^[6-9]\d{9}$/.test(phone)) {

showToast("Enter a valid mobile number.","error");

return;

}

if (date === "") {

showToast("Please select appointment date.","error");

return;

}

if (time === "") {

showToast("Please select appointment time.","error");

return;

}

const whatsappMessage =

`*Appointment Request*%0A%0A` +

`Name : ${name}%0A` +

`Phone : ${phone}%0A` +

`Date : ${date}%0A` +

`Time : ${time}%0A` +

`Symptoms : ${message}`;

window.open(

`https://wa.me/917947418982?text=${whatsappMessage}`,

"_blank"

);

showToast("Redirecting to WhatsApp...","success");

appointmentForm.reset();

});

}

/*==================================================
TOAST
==================================================*/

function showToast(message,type="success"){

const toast=document.createElement("div");

toast.className="toast "+type;

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},3000);

}

/*==================================================
AUTO TESTIMONIAL SLIDER
==================================================*/

const slider=document.querySelector(".testimonial-slider");

if(slider){

let scrollAmount=0;

setInterval(()=>{

const card=slider.querySelector(".testimonial");

if(!card)return;

scrollAmount+=card.offsetWidth+30;

if(scrollAmount>=slider.scrollWidth-slider.clientWidth){

scrollAmount=0;

}

slider.scrollTo({

left:scrollAmount,

behavior:"smooth"

});

},4000);

}

/*==================================================
HEADER BLUR
==================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.backdropFilter="blur(25px)";

header.style.background="rgba(255,255,255,.88)";

}else{

header.style.backdropFilter="blur(15px)";

header.style.background="rgba(255,255,255,.80)";

}

});

/*==================================================
LAZY IMAGE
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/*==================================================
CURRENT YEAR
==================================================*/

document.querySelectorAll(".year").forEach(el=>{

el.textContent=new Date().getFullYear();

});

/*==================================================
PREVENT DOUBLE SUBMIT
==================================================*/

let submitting=false;

if(appointmentForm){

appointmentForm.addEventListener("submit",()=>{

if(submitting)return;

submitting=true;

setTimeout(()=>{

submitting=false;

},2500);

});

}

/*==================================================
SMOOTH IMAGE FADE
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.style.opacity="0";

img.onload=()=>{

img.style.transition=".6s";

img.style.opacity="1";

};

});

/*==================================================
COPY PHONE
==================================================*/

document.querySelectorAll(".contact-card").forEach(card=>{

card.addEventListener("dblclick",()=>{

navigator.clipboard.writeText("7947418982");

showToast("Phone number copied.","success");

});

});

/*==================================================
ONLINE STATUS
==================================================*/

window.addEventListener("online",()=>{

showToast("Internet Connected","success");

});

window.addEventListener("offline",()=>{

showToast("Internet Connection Lost","error");

});

/*==================================================
WELCOME MESSAGE
==================================================*/

setTimeout(()=>{

showToast("Welcome to Dr. Salil Trivedi Clinic","success");

},1500);

/*==================================================
END
==================================================*/

console.log("Website Ready ✔");
