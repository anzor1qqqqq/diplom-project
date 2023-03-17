'use strict';

const scrollArrow = () => {
    const upArrow = document.querySelector('.up');
    const servicesSection = document.querySelector('.services-section ');

    document.addEventListener('scroll', () => {
        let coordinateY = servicesSection.getBoundingClientRect().y;

        if (coordinateY <= 0) {
            upArrow.style.display = 'block';
        } else if (coordinateY >= 300) {
            upArrow.style.display = 'none';
        };
    });

    upArrow.addEventListener('click', event => {
        event.preventDefault();

        const id = upArrow.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};

export default scrollArrow;