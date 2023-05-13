import './index.html';
import './page.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHower';
import { initScrollTopButton } from './modules/scrollTopButton';

videoBackgroundInit();
menuControl();
locationHover();

initScrollTopButton('arrow-top', {
  hover: false,
});

pageControlInit();

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
    el: '.career__slider-pagination',
    enabled: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        enabled: false,
      }
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: {
        enabled: false,
      }
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        enabled: false,
      }
    }
  }
})