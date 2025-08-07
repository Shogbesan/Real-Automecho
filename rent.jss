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




    const searchInput = document.getElementById('searchInput');
    const searchList = document.getElementsByClassName('searchList');
    const items = searchList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function () {
      const filter = searchInput.value.toLowerCase();

      for (let i = 0; i < items.length; i++) {
        const a = items[i].getElementsByTagName('a')[0];
        const textValue = a.textContent || a.innerText;

        if (textValue.toLowerCase().indexOf(filter) > -1) {
          items[i].style.display = '';
        } else {
          items[i].style.display = 'none';
        }
      }
    });
