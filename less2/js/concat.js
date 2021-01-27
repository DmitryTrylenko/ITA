String.prototype.concat = function () {
    let result = this;

    for (let i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }
    
    return result;
};

console.log('dhdh'.concat('73737', 'gfjg', 'dfghjk'));