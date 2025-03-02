// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('.nav-link');
const tilts = [-4, 4, -4, 4, -4];

// Get current page filename
const currentPage = window.location.pathname;

navLinks.forEach((link, index) => {
  // Get the href attribute
  const href = link.getAttribute('href');
  
  // Check if this link corresponds to the current page
  if (currentPage === href) {
    // Add the active class to highlight it
    link.classList.add('active');
  }

  const tilt = tilts[index % tilts.length];
  link.style.transform = 'rotate(0deg)';
  
  link.addEventListener('mouseenter', () => {
    link.style.transform = `rotate(${tilt}deg)`;
  });
  
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'rotate(0deg)';
  });
});

const waveEmoji = document.querySelector('.wave-emoji');

waveEmoji.addEventListener('mouseenter', function() {
this.style.animation = 'wave 0.8s ease-in-out';
});

waveEmoji.addEventListener('animationend', function() {
this.style.animation = '';
});