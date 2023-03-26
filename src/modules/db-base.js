'use strict';

import { checkInput } from "./regular2";

const createDbBase = () => {
    const formCallback = document.querySelector('[name="form-callback"]');
    const spanState = document.querySelector('.span_state');

    const awaitMessage = 'Идет отправка ваших данных...';
    const succesMessage = 'Ваши данные отправлены';
    const errorMessage = 'Произошла ошибка!';
    
    let bool;

    const setDate = async (obj) => {
        return await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',

            headers: {
                "Content-type": "application/json",
            },

            body: JSON.stringify(obj),
        }).then((response) => response.json());
    };
    
    formCallback.addEventListener('submit', event => {
        event.preventDefault();

        const date = new FormData(formCallback);
        const obj = {};

        bool = true;

        date.forEach((val, key) => {
            if (val == '') bool = false;

            obj[key] = val;
        });

        const a = checkInput(obj);

        if (bool && a) {
            spanState.textContent = awaitMessage;

            setDate(obj).then((text) => {
                console.log(text);

                spanState.textContent = succesMessage;  
            }).catch((error) => {
                console.log(error);

                spanState.style.color = 'red';
                spanState.textContent = errorMessage; 
            });

            formCallback.reset();
        };
    });
};

export default createDbBase;