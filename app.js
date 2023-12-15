// JavaScript for toggling the menu on small screens and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - nav.offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  });
  

  // JavaScript for typing animation
document.addEventListener('DOMContentLoaded', function() {
    const hiText = document.getElementById('hi-text');

    const developerText = document.getElementById('developer-text');
    const textToType = 'Front End Developer';
  
    // Typing animation for "Front End Developer"
    let i = 0;
    function type() {
      if (i < textToType.length) {
        developerText.textContent += textToType.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }
  
    // Initiate typing animation
    hiText.style.color = 'red'; // Change color of "Treasure Chinyimba"
    type();
  });
  

  //stars

  