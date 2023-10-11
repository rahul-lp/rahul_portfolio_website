
// change navbar color on scroll
const navBar = document.querySelector('.navbar');
const work_section = document.querySelector('.work_section');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= (work_section.offsetTop - 56)){
        navBar.classList.add('navbar-dark')
        navBar.classList.add('navbar_scrolled')
    } else {
        navBar.classList.remove('navbar-dark')
        navBar.classList.remove('navbar_scrolled')
    }
})

// animate_hidden element animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('animate_show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.animate_hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsTop = document.querySelectorAll('.animate_hidden_top');
hiddenElementsTop.forEach((el) => observer.observe(el));


// Mouse cursor animations
const trailer = document.querySelector('.trailer');

document.addEventListener('mousemove', e=>{
    trailer.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")

    const interactable = e.target.closest(".animate_hidden"); 
    const isIntersecting = interactable !== null;

    const keyfrmaes = {
        transform: `scale(${isIntersecting? 2:1})`,
        border: `${isIntersecting? 1:2}px solid #267CFF`,
    }

    trailer.animate(keyfrmaes, {
        duration: 300,
        fill:"forwards"
    });
})

// PDF dynamic height

function setPDFHeight() {
    let viewportHeight = window.innerHeight;
    document.getElementById("pdfEmbed").style.height = `${0.9 * viewportHeight}px`;
}

window.addEventListener("DOMContentLoaded", setPDFHeight);

window.addEventListener("resize", setPDFHeight);

// copy email to clipboard
function copyEmailCilpboard() {
    navigator.clipboard.writeText("rajpurohit.lp@gmail.com");
    alert("Copied to clipboard: rajpurohit.lp@gmail.com");
    console.log("copy email clicked!")
}