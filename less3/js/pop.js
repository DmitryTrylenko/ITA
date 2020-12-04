Array.prototype.pop = function () {
    let deletedElement = this[this.length - 1];
    let modifiedArray = [];

    for (let i = 0; i < this.length - 1; i++) {
        modifiedArray[i] = this[i];
    }

    this.length = modifiedArray.length;

    for(let i = 0; i < modifiedArray.length; i++) {
        this[i] = modifiedArray[i];
    }

    return deletedElement;
};

console.log([1, 2, 3, 4].pop());