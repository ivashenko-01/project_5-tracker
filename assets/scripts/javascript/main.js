const sectionRegion = new Swiper('.section-region__wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    grabCursor: true,

    // centeredSlides: 'auto',
    slidesPerView: 'auto',
    spaceBetween: 50,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination',
      },

});

const sectionStages = new Swiper('.section-stages__wrapper', {

    breakpoints: {
        // when window width is >= 320px
        768: {
          // Optional parameters
            direction: 'horizontal',
            loop: true,
            
            grabCursor: true,

            // centeredSlides: 'auto',
            slidesPerView: 'auto',
            spaceBetween: 50,

            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },

            pagination: {
                el: '.swiper-pagination',
            },
        },
    },

});