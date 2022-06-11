let navbar = document.querySelector('.header .nav-bar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick=()=>{
    navbar.classList.remove('active');
}
let searchbox = document.querySelector('.search-form');
document.querySelector('.search-btn').onclick=()=>{
    searchbox.classList.add('active');
}
document.querySelector('.close-search').onclick=()=>{
    searchbox.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.onscrollY > 0){
        document.querySelector('.header').classList.remove('active');
    }
    else{
        document.querySelector('.header').classList.add('active');
    }
};
window.onload=()=>{
    if(window.onscrollY> 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
};
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
           slidesPerView: 1,
          },
        640: {
           slidesPerView: 2,
        },
        768: {
           slidesPerView: 3,
        },
        1024: {
           slidesPerView: 4,
        },
      },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
           slidesPerView: 1,
          },
        640: {
           slidesPerView: 2,
        },
        768: {
           slidesPerView: 3,
        },
      },
  });

  var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
           slidesPerView: 1,
          },
        768: {
           slidesPerView: 2,
        },
        991: {
           slidesPerView: 3,
        },
      },
  });
 
  var swiper = new Swiper(".clients-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
           slidesPerView: 1,
          },
        640: {
           slidesPerView: 2,
        },
        768: {
           slidesPerView: 3,
        },
        1024: {
           slidesPerView: 4,
        },
      },
  });