'use strict';

const createModalWindow = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const callback = document.querySelector('#callback');

    const closeModal = event => {
        if (event.target.tagName === 'IMG' || event.target.classList.contains('modal-overlay')) {
            modalOverlay.style.display = 'none';
            callback.style.display = 'none';
        };
    };
    
    callbackBtn.forEach(item => {
        item.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            callback.style.display = 'block';

            document.addEventListener('click', closeModal);
        });
    });

    document.removeEventListener('click', closeModal);
};

export default createModalWindow;