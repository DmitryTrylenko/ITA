Array.prototype.push = function (...elements) {
    const modifiedArray = [];

    for(let i = 0; i < this.length; i++) {
        modifiedArray[i] = this[i];
    }

    for(let i = 0; i < elements.length; i++) {
        modifiedArray[modifiedArray.length] = elements[i];
    }

    console.log(modifiedArray);

    for(let i = 0; i < modifiedArray.length; i++) {
        this[i] = modifiedArray[i];
    }

    return modifiedArray.length;
};

var a = [0, 1];
a.push(2, 3);
console.log(a);