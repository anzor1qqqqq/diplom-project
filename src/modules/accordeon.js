'use strict';

const accordeonAbout = () => {
    const accordeon = document.querySelector('.accordeon');
    const elementAccordeon = accordeon.querySelectorAll('.element');
    const elementContent = accordeon.querySelectorAll('.element-content');

    elementAccordeon.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('active')) {
                elementAccordeon.forEach((elem, index) => {
                    elem.classList.remove('active');
                    
                    elementContent[index].style.height = '';
                    elementContent[index].style.padding = '';
                });
    
                item.classList.add('active');

                elementContent[i].style.height = (elementContent[i].scrollHeight + 50) + 'px';
                elementContent[i].style.padding = '20px';
            } else {
                item.classList.remove('active');

                elementContent[i].style.height = '';
                elementContent[i].style.padding = '';
            };
        });
    });
    
};

export default accordeonAbout;