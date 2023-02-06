const hamburger = document.getElementsByClassName('hamburger')[0];
const navMenu = document.getElementsByClassName('nav-menu')[0];

hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
