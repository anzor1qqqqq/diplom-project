'use strict';

const carouselSlider = () => {
    const cardService = document.querySelectorAll('.col-md-4');

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const servicesArrow = document.querySelector('.services-arrow');

    let right = 0;
    let protect = 0;

    const onSlideCarousel = () => {
        cardService.forEach(item => {
            if (item.classList.contains('no-active')) {
                right += cardService[0].offsetWidth;
    
                item.style.right = '-' + right + 'px';
            } else {
                item.style.right = '0px';
            };
        });
    
        let lastCard = parseInt(cardService[5].style.right);
    
        arrowRight.addEventListener('click', () => {
            cardService.forEach(item => {
                lastCard = parseInt(cardService[5].style.right);
    
                if (lastCard !== 0) {
                    right = parseInt(item.style.right);
                    
                    item.style.right = (right + item.offsetWidth) + 'px';
                };
            });
        });
    
        arrowLeft.addEventListener('click', () => {
            cardService.forEach(item => {
                lastCard = parseInt(cardService[5].style.right);
                protect = '-' + (item.offsetWidth * 3);
                
                if (lastCard !== +protect) {
                    right = parseInt(item.style.right);
    
                    item.style.right = (right - item.offsetWidth) + 'px';
                };
            });
        });
    };

    const offSlideCarousel = () => {
        if (window.screen.availWidth < 1000) {
            cardService.forEach(item => {
                item.style.right = '0px';
            });
    
            servicesArrow.style.display = 'none';
        } else {
            servicesArrow.style.display = '';
            onSlideCarousel();
        };
    };

    offSlideCarousel();
};

export default carouselSlider;