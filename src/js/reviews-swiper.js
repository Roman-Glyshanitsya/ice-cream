import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Autoplay],

  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 1500,
});
