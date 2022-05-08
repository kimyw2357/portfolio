'use strict'

// navbar transparent 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');    
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling navbr menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (!link) return;
  scrollIntoView(link);
});

// contact me button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const target = document.querySelector(selector);
  const targetY = target.getBoundingClientRect().y;
  const distance = window.pageYOffset + targetY - navbarHeight;
  window.scroll({
    left: 0,
    top: distance,
    behavior: 'smooth',
  });
}