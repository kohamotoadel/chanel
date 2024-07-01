document.addEventListener(`DOMContentLoaded`, function () { 
        AOS.init();

        var swiper = new Swiper(".secondSwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 0,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            },
        },

        });

        var swiper = new Swiper(".firstSwiper", {
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
        });
        

});