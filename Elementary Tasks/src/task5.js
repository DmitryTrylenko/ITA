function getTicketsInfo(min, max){
    const validationStatus = validate5(min, max);

    if (validationStatus.status) {
        return validationStatus;
    } else {
        let simpleMethodCounter = 0;
        let difficultMethodCounter = 0;

        for (let i = +min; i <= +max; i++) {
            const numbersArr = i.toString().split('');

            simpleMethodCounter += simpleMethod(numbersArr);
            difficultMethodCounter += difficultMethod(numbersArr);
        }

        if (simpleMethodCounter > difficultMethodCounter) {
            return `Победил простой метод - ${simpleMethodCounter}, против - ${difficultMethodCounter}`
        } else if (simpleMethodCounter < difficultMethodCounter){
            return `Победил сложный метод - ${difficultMethodCounter}, против - ${simpleMethodCounter}`
        } else return `Ничья`;
    }
}

function simpleMethod(value) {
    let leftSide = 0;
    let rightSide = 0;

    for (let i = 0; i < value.length / 2; i++) {
        leftSide += +value[i];
        rightSide += +value[i + value.length / 2];
    }

    return leftSide === rightSide ? 1 : 0;
}

function difficultMethod(value) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2) {
            odd += +value[i];
        } else {
            even += +value[i];
        }
    }

    return odd === even ? 1 : 0;
}

function validate5(min, max) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };

    if (min && max) {
        const reg = /^\d+$/;
        if (reg.test(min) && reg.test(max)) {
            if (min > max) {
                errorStatus.reason = 'Mинимальный диапазон больше максимального';
                return errorStatus;
            }
            if (min.length == 6 && max.length == 6) {
                return true;
            } else {
                errorStatus.reason = 'Некорректная длина билета. Введите 6 цифр.';
                return errorStatus;
            }
        } else {
            errorStatus.reason = 'Введены некорректные данные';
            return errorStatus;
        }
    } else {
        errorStatus.reason = 'Введите данные по условию';
        return errorStatus;
    }
}
