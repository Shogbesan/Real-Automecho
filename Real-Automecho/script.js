const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let currentIndex = 0;
let autoSlideInterval;

function updateSlide() {
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

startAutoSlide();

// Touch support
let startX = 0;
slider.addEventListener('touchstart', e => {
  stopAutoSlide();
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
  startAutoSlide();
});

// Mouse drag support
let isDragging = false;
let startMouseX;

slider.addEventListener('mousedown', e => {
  stopAutoSlide();
  isDragging = true;
  startMouseX = e.clientX;
});

slider.addEventListener('mouseup', e => {
  if (!isDragging) return;
  isDragging = false;
  const endMouseX = e.clientX;
  if (startMouseX - endMouseX > 50) nextSlide();
  else if (endMouseX - startMouseX > 50) prevSlide();
  startAutoSlide();
});



const swiper = new Swiper('.swiper', {
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

const menuToggle = document.querySelector('.menu-toggle');

const menu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

const chatBox = document.getElementById('chatBox');

  function toggleChat() {
    chatBox.classList.toggle('show-chat');
  }

  // Auto show after 5 seconds (5000ms)
  window.onload = function () {
    setTimeout(() => {
      chatBox.classList.add('show-chat');
    }, 5000);
  };