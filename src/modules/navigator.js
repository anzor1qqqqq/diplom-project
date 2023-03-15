'use strict';

const menuNavigator = () => {
    const navMenu = document.querySelectorAll('.nav_menu');

    navMenu.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();

            const id = event.target.getAttribute('href');
            
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
};

export default menuNavigator;