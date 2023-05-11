import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHower';

videoBackgroundInit();
menuControl();
locationHover();

slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination'
  }
})

const careerImageItems = document.querySelectorAll('.career__slider-item');

careerImageItems.forEach((item, index) => {
  item.classList.add(`career__slider-item_${index % 2 ? 'even': 'odd'}`)
})

slidersInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination'
  },
  breakpoints: {
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,

    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,

    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,

    }
  }
})