'use strict';

const carouselSlider = () => {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const cardService = document.querySelectorAll('.col-md-4');
    const servicesCarousel = document.querySelector('.services-carousel');

    let right = 0;

    arrowRight.addEventListener('click', () => {
        right += cardService[0].offsetWidth;

        ulService.style.right = right + 'px';
    });

    arrowLeft.addEventListener('click', () => {
        if (right > 0) {
            right -= cardService[0].offsetWidth;

            ulService.style.right = right + 'px';
        };
    });
};

export default carouselSlider;