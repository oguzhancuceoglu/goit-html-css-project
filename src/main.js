const menuBtn = document.querySelector('.nav-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.menu-close-btn');

const openMenu = () => {
  menu.classList.add('show');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  menu.classList.remove('show');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};

menuBtn?.addEventListener('click', openMenu);
overlay?.addEventListener('click', closeMenu);
closeBtn?.addEventListener('click', closeMenu);
