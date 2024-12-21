// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination, Autoplay],

  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  //   autoHeight: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 1500,
});
