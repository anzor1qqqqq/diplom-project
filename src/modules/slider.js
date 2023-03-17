'use strict';

const sliderPreview = () => {
    const itemSlider = document.querySelectorAll('.item');

    let counter = 0;

    const swipeSlide = () => {
        itemSlider[counter].classList.add('hidden');

        counter !== 2 ? counter++ : counter = 0;

        itemSlider[counter].classList.remove('hidden');
    };

    const startSlider = () => {
        setInterval(swipeSlide, 3000)
    };

    startSlider();
};

export default sliderPreview;