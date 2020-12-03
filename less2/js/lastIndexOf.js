String.prototype.lastIndexOf = function (query) {
    for (var i = this.length; i > 0; i--) {
        for (q = 0; q < query.length; q++) {
            if (this[i + q] !== query[q]) {
                break;
            }
            if (q === query.length - 1) {
                return i;
            }
        }
    }
    return -1;
};

console.log('do jkjfff do'.lastIndexOf('do'));
console.log('do jkjfff do dldl do'.lastIndexOf('dod'));