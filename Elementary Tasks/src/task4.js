function getPalindrome(value){
    let validationStatus = validate4(value);

    if (validationStatus.status) {
        return validationStatus;
    } else {
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value.length; j++) {
                const palindrome = value.slice(i, j + i + 1);
                const reverse = palindrome.split('').reverse().join('');

                if (palindrome == reverse && palindrome.length > 1) {
                    return palindrome;
                }
            }
        }

        return 0;
    }
}


function validate4(value) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };

    if (value) {
        let reg = /^\d+$/;

        if (reg.test(value)) {
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
