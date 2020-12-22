function getSequence(leng, min){
    let checkValid = validate6(leng, min);

    if (!checkValid.status) {
        const lengNumber = parseInt(leng);
        const minNumber = parseInt(min);

        let result = [];
        let first = Math.ceil(Math.sqrt(minNumber));

        for (let i = first; i < first + lengNumber; i++) {
            result.push(i);
        }

        return result.join(',');
    } else {
        return checkValid;
    }
}


function validate6(leng, min) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };

    if (leng && min) {
        let reg = /^\d+$/;
        if ((reg.test(leng)) && (reg.test(min))) {
            return true;
        } else {
            errorStatus.reason = 'Введены некорректные данные';
            return errorStatus;
        }
    } else {
        errorStatus.reason = 'Введите данные по условию';
        return errorStatus;
    }
}
