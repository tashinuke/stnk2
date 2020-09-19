import Swiper from "swiper";
import "../styles/style.css";
// import 'alpinejs';
var swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
