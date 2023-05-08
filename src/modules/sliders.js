import {Swiper, Pagination, Autoplay} from "swiper";

const params = {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  modules: [Autoplay, Pagination],
};

export const slidersInit = (selectorsSlider, newParams) => {
  new Swiper(selectorsSlider, {
    ...params,
    ...newParams,
  })
}