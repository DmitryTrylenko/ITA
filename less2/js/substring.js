String.prototype.substring = function (startIndex, endIndex) {
    const start = startIndex < 0 || !startIndex ? 0 : startIndex;
    const end = endIndex < 0 || !endIndex ? 0 : endIndex;
    const resultLength = end ? end - start : this.length - start;

    for (let i = 0; i < this.length; i++) {
        let result = '';
        if (i === start) {
            for (let g = 0; g < resultLength; g++) {
                result = result + this[start + g];
            }
            return result;
        }
    }
};

console.log('Mozilla'.substring(1, 3));
console.log('Mozilla'.substring(2));