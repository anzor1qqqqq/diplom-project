'use strict';

const createModalWindow = () => {
    const formCallback = document.querySelector('[name="form-callback"]');
    const callbackBtn = document.querySelectorAll('.callback-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const callback = document.querySelector('#callback');
    const spanState = document.querySelector('.span_state');

    const cardModal = document.querySelectorAll('[href="#application"]');

    const closeModal = event => {
        if (event.target.tagName === 'IMG' || event.target.classList.contains('modal-overlay')) {
            spanState.textContent = '';
            formCallback.reset();
            
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

    cardModal.forEach(item => {
        item.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            callback.style.display = 'block';

            document.addEventListener('click', closeModal);
        });
    });

    document.removeEventListener('click', closeModal);
};

export default createModalWindow;