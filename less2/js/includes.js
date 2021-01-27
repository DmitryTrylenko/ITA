String.prototype.includes = function (searchString, startFromIndex) {
    if (typeof startFromIndex !== 'number') {
        startFromIndex = 0;
    }

    if (startFromIndex + searchString.length > this.length) {
        return false;
    } else {
        for (let i = startFromIndex; i < this.length - startFromIndex; i++) {
            for (let q = 0; q < searchString.length; q++) {
                if (this[i + q] !== searchString[q]) {
                    break;
                }
                if (q === searchString.length - 1) {
                    return true;
                }
            }
        }
        return false;
    }
};

console.log('do jkjfff do dldl do'.includes('do'));
console.log('do jkjfff do dldl do'.includes('jkjfff', 5));