/* Header - script for mobile menu opening and closing */
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.mobile-menu-close');
const menu = document.querySelector('#mobile-menu');

navBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
