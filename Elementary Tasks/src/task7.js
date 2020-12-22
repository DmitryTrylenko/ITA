function getFibonacciArray(min, max){
    let validationStatus = validate7(min, max);

    if (validationStatus.status) {
        return validationStatus;
    } else {
        if (max) {
            return getFibonacciOnRange(min, max);
        } else {
            return getFibonacciWithLength(min);
        }
    }
}

function validate7(min, max) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };

    if (min && !max || min && max) {
        const regx =/^[0-9]+$/;
        if (!regx.test(min) || max && !regx.test(min) && !regx.test(max)) {
            errorStatus.reason = 'Введены некорректные данные';
            return errorStatus;
        }
    }

    if (max && min && +max < +min) {
        errorStatus.reason = 'Максимальное значение меньше минимального';
        return errorStatus;
    }
    if (!min && !max || max && !min) {
        errorStatus.reason = 'Введите данные по условию';
        return errorStatus;
    }

    return true;
}

function getFibonacciOnRange(min, max) {
    let current = 0;
    const fib = [1, 1];
    const result = [];

    if (+min === 0) {
        result.push(0);
    }

    for (let i = 0; current < max; i++) {
        if (i >= 2) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
            current = fib[fib.length - 1];
        } else {
            current = fib[i];
        }

        if (current >= +min && current <= max) {
            result.push(current);
        }
    }

    return result;
}

function getFibonacciWithLength(digitsLength) {
    const result = [];
    const tempArr = [1, 1];
    let current = 0;

    while(current.toString().length <= digitsLength) {
        const diff = tempArr.length - 2 >= 0 ? tempArr[tempArr.length - 2] : tempArr[tempArr.length - 1] - 1;
        current = tempArr[tempArr.length - 1] + diff;
        tempArr.push(current);

        if (current.toString().length == digitsLength) {
            result.push(current);
        }
    }

    return result;
}
