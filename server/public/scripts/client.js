console.log('client.js is LOADED')

let theOperators = '';

// Class to handle operation
class Operation {
    constructor(x, y, type) {
        this.x = x,
            this.y = y,
            this.type = type
    }
}

// jQuery shorthand
$(calcApp);

// This is the actual app for the calculator
function calcApp() {
    getHistory();

    $('#addition-button').on('click', function() {
        theOperators = 'Add';
    });
    $('#subtraction-button').on('click', function() {
        theOperators = 'Subtract';
    });
    $('#multiplication-button').on('click', function() {
        theOperators = 'Multiply';
    });
    $('#division-button').on('click', function() {
        theOperators = 'Divide';
    });
    $('#equals-button').on('click', getCalc);
    $('#eraser-button').on('click', clearAll);
}

// Dat Ajax getting the calculation from the inputs
function getCalc() {
    let firstNumber = $('#first').val();
    let secondNumber = $('#second').val();

    // You want an object? Here is an object!
    let calcObject = new Operation(firstNumber, secondNumber, theOperators);

    // Clear those inputs!
    $('#first').val('');
    $('#second').val('');

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: calcObject,
        success: function(response) {
            getHistory();
            getResults();
        }
    });
}

// Display results at #result
function displayResults(result) {
    for (let i = 0; i < result.length; i++) {
        $('#result').text(result[i]);
    }
}

// Fetchin' those results with the ajax
function getResults() {
    $.ajax({
        method: 'GET',
        url: '/calculator',
        success: function(response) {
            displayResults(response);
        }
    });
}

// You've heard of results on a DOM? How about the history on the DOM???
function displayHistory(history) {
    $('#history-list').empty();
    for (let i = 0; i < history.length; i++) {
        $('#history-list').prepend('<li>', '<button class="button-history" id="history-button">' + history[i] + '</button>', '</li>');
    }
    bindClickEvent();
}

function bindClickEvent() {
    $(".button-history").click(function() {
        let textOnButton = $(this).html();
        let textAsArray = textOnButton.split(' ');
        // Splits using space as a delimiter, now textAsArray = ['1', '+', '1']
        let number1 = textAsArray[0];
        let number2 = textAsArray[2];
        let moreOperators = textAsArray[1];
        $('#first').val(number1);
        $('#second').val(number2);
        // (choose which operation button to click with an if statement or a switch on operation)
        if (moreOperators == '+') {
            $('#addition-button').click();
        } else if (moreOperators == '-') {
            $('#subtraction-Button').click();
        } else if (moreOperators == '*') {
            $('#multiplication-button').click();
        } else {
            $('#division-button').click();
        }
        $('#equals-button').click();
        // (trigger a click on that button)
    });
}

// More ajax getting stuff, this time the history
function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/history',
        success: function(response) {
            displayHistory(response);
        }
    });
}

// Clear EVERYTHING
function clearAll() {
    $.ajax({
        method: 'DELETE',
        url: '/clearAll',
        success: function(response) {
            $('#history-list').empty();
            $('#result').html('0');
        }
    });
}