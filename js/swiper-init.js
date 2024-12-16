const progressCircle = document.querySelector(".autoplay-progress svg");
const progressCurrent = document.querySelector(".autoplay-progress .current-slide");
const progressTotal = document.querySelector(".autoplay-progress .total-slide");

function geSlideDataIndex(swipe){
    var activeIndex = swipe.activeIndex;
    var slidesLen = swipe.slides.length;
    if(swipe.params.loop){
        switch(swipe.activeIndex){
            case 0:
                activeIndex = slidesLen-3;
                break;
            case slidesLen-1:
                activeIndex = 0;
                break;
            default:
                --activeIndex;
        }
    }
    return  activeIndex;
}


const mainSwiper = new Swiper(".main-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    init: function (sw) {
        console.log('swiper initialized');
        progressCurrent.innerHTML = 1
        progressTotal.innerHTML = '/' + sw.slides.length
    },

    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressCurrent.innerHTML = document.querySelector('.swiper-slide-active').dataset.ind
    },

  }
});