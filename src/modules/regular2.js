'use strict';

export const checkInput = ({name, telNum}) => {
    const regExpName = /^\D{2,}$/;
    const regExpTel = /^[\d?\+]{11,}$/;
    
    if (!regExpName.test(name) || !regExpTel.test(telNum)) {
        alert('Введены некорректные данные');
    } else {
        return true;
    };
};  