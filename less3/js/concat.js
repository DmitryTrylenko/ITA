Array.prototype.concat = function (...args) {
    let resultArray = [];

    for(let i = 0; i < this.length; i++) {
        resultArray[i] = this[i];
    }

    for(let i = 0; i < args.length; i++) {
        for(let j = 0; j < args[i].length; j++) {
            resultArray[resultArray.length] = args[i][j];
        }
    }

    return resultArray;
};

console.log([1, 2].concat([3, 4], [5, 6]));