String.prototype.repeat = function (count) {
    const repeatTimes = count ? count : 1;
    let result = '';

    for (let i = 0; i < repeatTimes; i++) {
        result += this;
    }
    return result;
};

console.log('Mozilla '.repeat(3));
console.log('Mozilla '.repeat());