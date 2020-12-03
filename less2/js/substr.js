String.prototype.substr = function (startFromIndex, lengthToCut) {
    const start = startFromIndex < 0 || !startFromIndex ? 0 : startFromIndex;
    const outputWordLength = lengthToCut || this.length - startFromIndex;

    for (let i = 0; i < this.length; i++) {
        let result = '';
        if (i === start) {
            for (let g = 0; g < outputWordLength; g++) {
                result = result + this[i + g];
            }
            return result;
        }
    }
};

console.log('Mozilla'.substr(1, 2));
console.log('Mozilla'.substr(2));