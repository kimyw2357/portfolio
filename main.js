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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//navbar toglle button 
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// contact me button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// home opacity 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show arrow up btn
const arrowUp = document.querySelector('.arrow-up ');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//click "arrowUp" 
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(!filter) return;

const select = document.querySelector('.category__btn.selected');
select.classList.remove('selected');
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
})


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