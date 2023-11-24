
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

// copy email to clipboard
function copyEmailCilpboard() {
    navigator.clipboard.writeText("rajpurohit.lp@gmail.com");
    alert("Copied to clipboard: rajpurohit.lp@gmail.com");
    console.log("copy email clicked!")
}


document.addEventListener("DOMContentLoaded", function() {
    // Reference to the gif and the text
    const gifElement = document.querySelector('.hi_gif');
    const textElement = document.querySelector('.hi_text');

    var playGifTimer; // Timer for playing the gif every 5 seconds
    
    // Function to play the gif
    function playGif() {
        // Ensure gif starts from the beginning
        const gifSrc = gifElement.getAttribute('src');
        gifElement.setAttribute('src', ''); 
        gifElement.setAttribute('src', gifSrc);

        gifElement.style.display = 'block';

        // Gif lasts 2.8 seconds
        setTimeout(() => {
            gifElement.style.display = 'none';
            // Reattach the event listener after gif plays
            textElement.addEventListener('mouseover', handleHover);        
            resetPlayGifTimer();
        }, 2800);  // 2800ms = 2.8 seconds
    }

    // Function to reset and start the timer to play the gif
    function resetPlayGifTimer() {
        clearTimeout(playGifTimer); // Clear any existing timer
        playGifTimer = setTimeout(handleHover, 8000); // Set a new timer for 8 seconds
    }

    // Function to handle hover event
    function handleHover() {
        // Detach the event listener to prevent replay while gif is playing
        textElement.removeEventListener('mouseover', handleHover);
        playGif();
    }

    // Initially play the gif when the page loads
    playGif();

});