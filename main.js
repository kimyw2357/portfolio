'use strict'

// navbar transparent 
const navbar = document.querySelector('#navbar');
const navbarHeigh = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeigh) {
    navbar.classList.add('navbar--dark');    
  } else {
    navbar.classList.remove('navbar--dark');
  }
})