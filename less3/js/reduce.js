// map

['Яблоко', 'Банан', 'Ананас'].reduce((accumulator, currentValue) => {
    accumulator.push(currentValue[0]);
    return accumulator;
}, []);

// filter

['Яблоко', 'Банан', 'Ананас'].reduce((accumulator, currentValue) => {
    if (currentValue[0].toLowerCase() == 'a') {
        accumulator.push(currentValue);
    }

    return accumulator;
}, []);

// forEach

var a = ['Яблоко', 'Банан', 'Ананас'];

a.reduce((accumulator, currentValue, index, array) => {
    array[index] = `${index + 1}: ${currentValue};`;
}, 0);

console.log(a);