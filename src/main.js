const openBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('#mobile-menu');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.mobile-menu a');

// open mobile menu
openBtn.addEventListener('click', () => {
  menu.classList.add('show');
  overlay.classList.add('closing');
  document.body.style.overflow = 'hidden';
});

// close mobile menu
const closeMenu = () => {
  menu.classList.add('closing');
  menu.classList.remove('show');
  menu.addEventListener('transitionend', function handler() {
    menu.classList.remove('closing'); // animasyon bitince kapalı sınıf kaldır
    menu.removeEventListener('transitionend', handler);
  });
  overlay.classList.remove('show');
  document.body.style.overflow = '';
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

links.forEach(link => {
  link.addEventListener('click', closeMenu);
});
