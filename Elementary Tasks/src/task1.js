function drawBoard(width, height, symbol) {
    let validationStatus = validate1(width, height, symbol);

    if (validationStatus.status) {
        return validationStatus;
    } else {
        const result = [];
        for (let i = 0; i < width; i++) {

            for (let j = 0; j < height; j++) {
                if (i%2 == j%2) {
                    result.push(`${symbol}`);
                } else {
                    if (j==0) {
                        result.push(` ${symbol}`);
                    } else {
                        result.push(`${symbol}`);
                    }
                }
            }

            result.push(`\n`);
        }

        return result.join(' ');
    }
}

function validate1(width, height, symbol) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };

    if (width && height && symbol) {
        const regx =/^[0-9]+$/;
        if (!regx.test(width) || !regx.test(height)) {
            errorStatus.reason = 'Введены некорректные данные';
            return errorStatus;
        } else {
            return true;
        }
    } else {
        errorStatus.reason = 'Введите данные по условию';
        return errorStatus;
    }
}
