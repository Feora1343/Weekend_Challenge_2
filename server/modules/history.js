// Array to hold the historical data
let historyData = [];

// This will update historyData with new history calcs
let addToHistory = function(x, y, type) {
    let operator = '';
    if (type == 'Add') {
        operator = '+'
    } else if (type == "Subtract") {
        operator = '-'
    } else if (type == "Multiply") {
        operator = '*'
    } else {
        operator = '/'
    }
    historyData.push(x + ' ' + operator + ' ' + y);
}

// This returns the historical data
let allHistory = function() {
    return historyData;
}

// Clear!
let clearAll = function() {
    historyData = [];
}

module.exports = {
    allHistory: allHistory,
    addToHistory: addToHistory,
    clearAll: clearAll
}