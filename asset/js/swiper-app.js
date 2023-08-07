/***********************swiper-slider-js*****************************/
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        360: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView:6
        },
        991: {
          slidesPerView: 8
        },
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        360: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView:4
        },
        991: {
          slidesPerView: 6
        },
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});


  const swiper3 = new Swiper(".mySwiperb3", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/************************************************/

