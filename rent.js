const menuToggle = document.querySelector('#menu-toggle');

const menu = document.querySelector('#mobile-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

const swiper = new Swiper('.swiper', 
  {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});