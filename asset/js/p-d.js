const productslider = new Swiper(".mySwiperp", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2p = new Swiper(".mySwiper2p", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productslider,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });
/**********************************************/
const btns = document.querySelectorAll('[data-for-button]');
const countervlue = document.getElementById('value');
let count = 0;


btns.forEach(function(item){
    item.addEventListener('click',function(){
        const btnsvalue = this.dataset.forButton;
        console.log(btnsvalue)
        if(btnsvalue ==='increase'){
            count++
        }else{
            count--
        }
        if(count<0){
            value.style.color = 'red';
        }
        countervlue.innerText=count
    })
})