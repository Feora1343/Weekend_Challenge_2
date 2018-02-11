// Array to hold the calc results
let cResult = [];

// Gotta calc those calcs
let cCalcs = function(x, y, cType) {
    x = Number(x);
    y = Number(y);
    let calcResult = 0;
    if (cType == 'Add') {
        calcResult = x + y;
    } else if (cType == 'Subtract') {
        calcResult = x - y;
    } else if (cType == 'Multiply') {
        calcResult = x * y;
    } else {
        calcResult = x / y;
    }
    cResult.push(calcResult);
}

// Return the calc result
let returnCalc = function() {
    return cResult;
}

// Not clear? No it's pretty clear
let clearAll = function() {
    cResult = [];
}

module.exports = {
    returnCalc: returnCalc,
    cCalcs: cCalcs,
    clearAll: clearAll
}