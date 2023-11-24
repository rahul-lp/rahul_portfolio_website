

// PDF dynamic height
function setPDFHeight() {
    let viewportHeight = window.innerHeight;

    if(document.getElementById("mainNav")!=null) {
        var mainNav = document.getElementById("mainNav").offsetHeight;
        var secNav = document.getElementById("secNav").offsetHeight;
        var desiredHeight = viewportHeight - mainNav - secNav;

        document.getElementById("navTabContent").style.maxHeight = `${desiredHeight}px`;
        document.getElementById("navTabContent").style.overflowY = "auto";
    }


    if(document.getElementById("pdfEmbed")!=null){
        document.getElementById("pdfEmbed").style.height = `${0.9 * viewportHeight}px`;
        document.getElementById("pdfEmbed2").style.height = `${0.9 * viewportHeight}px`;

    }
}

function setNavTabContentHeight(){
    let viewportHeight = window.innerHeight;
}

window.addEventListener("DOMContentLoaded", setPDFHeight);
window.addEventListener("resize", setPDFHeight);

// Function to reset the scroll position
function resetTabContentScroll() {
    // Select all elements with the class
    var tabContentContainers = document.getElementById('navTabContent').scrollTop = 0;
}

// Get all elements with the class 'navcolor'
var navColorButtons = document.getElementsByClassName('navcolor');

// Iterate over the collection and add a click event listener to each element
for (var i = 0; i < navColorButtons.length; i++) {
    navColorButtons[i].addEventListener('click', function() {
        resetTabContentScroll();
    });
}