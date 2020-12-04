Array.prototype.shift = function () {
    let deletedElement = this[0];
    let modifiedArray = [];

    for (let i = 0; i < this.length - 1; i++) {
        modifiedArray[i] = this[i + 1];
    }

    this.length = modifiedArray.length;

    for(let i = 0; i < modifiedArray.length; i++) {
        this[i] = modifiedArray[i];
    }

    return deletedElement;
};

console.log([1, 2, 3, 4].shift());