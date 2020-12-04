Array.prototype.unshift = function (...elements) {
    let modifiedArray = [];

    for (let i = elements.length; i < this.length + elements.length; i++) {
        modifiedArray[i] = this[i - elements.length];
    }

    for(let i = elements.length; i !== 0; i--) {
        modifiedArray[i - 1] = elements[i - 1];
    }

    console.log(modifiedArray);

    for(let i = 0; i < modifiedArray.length; i++) {
        this[i] = modifiedArray[i];
    }

    return modifiedArray.length;
};

var a = [2, 3];
a.unshift(0, 1);
console.log(a);