/*========== menu icon navbar ===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========== scroll section active link ===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });


/*========== sticky navbar ===========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ===========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*========== read more event for 'about' section ===========*/
var parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {
  const current = event.target;

  // Check if the clicked element is the read-more-btn
  const isReadMoreBtn = current.className.includes('read-more-btn');
  if (!isReadMoreBtn) return;

  // Get the extra text
  const currentText = current.parentNode.querySelector('.read-more-text');
  
  // Toggle the visibility of the extra text
  currentText.classList.toggle('read-more-text--show');

  // Update the button text
  current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";

  // Handle the "..." logic
  const paragraph = current.previousElementSibling; // The <p> tag containing the text
  if (currentText.classList.contains('read-more-text--show')) {
    // Remove "..." when showing more text
    paragraph.innerHTML = paragraph.innerHTML.replace('...', '');
  } else {
    // Add "..." when hiding extra text
    if (!paragraph.innerHTML.includes('...')) {
      const shortenedText = paragraph.innerHTML.split('<span')[0]; // Get the text before the read-more-text
      paragraph.innerHTML = `${shortenedText.trim()}...${currentText.outerHTML}`;
    }
  }
});

/*========== read more event for 'section' section ===========*/
var parentContainer = document.querySelector('.read-more-containers'); // containers with a 's', that's the different between it and the about section

parentContainer.addEventListener('click', event => {
  const current = event.target;

  // Check if the clicked element is the read-more-btn
  const isReadMoreBtn = current.className.includes('read-more-btn');
  if (!isReadMoreBtn) return;

  // Get the extra text
  const currentText = current.parentNode.querySelector('.read-more-text');
  
  // Toggle the visibility of the extra text
  currentText.classList.toggle('read-more-text--show');

  // Update the button text
  current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";

  // Handle the "..." logic
  const paragraph = current.previousElementSibling; // The <p> tag containing the text
  if (currentText.classList.contains('read-more-text--show')) {
    // Remove "..." when showing more text
    paragraph.innerHTML = paragraph.innerHTML.replace('...', '');
  } else {
    // Add "..." when hiding extra text
    if (!paragraph.innerHTML.includes('...')) {
      const shortenedText = paragraph.innerHTML.split('<span')[0]; // Get the text before the read-more-text
      paragraph.innerHTML = `${shortenedText.trim()}...${currentText.outerHTML}`;
    }
  }
});

/*========== swiper ===========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*========== dark light mode ===========*/
document.addEventListener('DOMContentLoaded', () => {
  const darkModeIcon = document.getElementById('darkMode-icon');
  const body = document.body;

  // Load the theme preference from localStorage
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-mode') {
      darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    }
  } else {
    // Default to light mode if no preference is saved
    body.classList.add('light-mode');
  }

  // Toggle the theme and save the preference
  darkModeIcon.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      darkModeIcon.classList.replace('bx-moon', 'bx-sun');
      localStorage.setItem('darkMode', 'dark-mode');
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      darkModeIcon.classList.replace('bx-sun', 'bx-moon');
      localStorage.setItem('darkMode', 'light-mode');
    }
  });
});

/*========== scroll reveal ===========*/
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });