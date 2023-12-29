// script.js

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - document.querySelector('.navbar-container').offsetHeight,
        behavior: 'smooth'
    });
}
