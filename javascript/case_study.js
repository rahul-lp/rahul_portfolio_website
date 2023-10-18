

// PDF dynamic height
function setPDFHeight() {
    let viewportHeight = window.innerHeight;
    document.getElementById("pdfEmbed").style.height = `${0.9 * viewportHeight}px`;
    document.getElementById("pdfEmbed2").style.height = `${0.9 * viewportHeight}px`;
}

window.addEventListener("DOMContentLoaded", setPDFHeight);
window.addEventListener("resize", setPDFHeight);