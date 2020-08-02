import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination])



const swiper = new Swiper('.swiper-container',{

    direction: "horizontal",
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    /*scrollbar: {
        el: '.swiper-scrollbar',
    },*/

})

console.log('swiper')