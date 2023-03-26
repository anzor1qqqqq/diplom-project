'use strict';

const regularIputForm = () => {
    const inputName = document.querySelector('[name="name"]');
    const inputTel = document.querySelector('[name="telNum"]');;

    inputName.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^\а-яА-Я\s]/g, '');
    });

    inputTel.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^\d?\+]/g, '');
    });
};

export default regularIputForm;