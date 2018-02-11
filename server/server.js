// Loading required modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calc = require('./modules/calculator');
const history = require('./modules/history')

// Port listening
const port = process.env.PORT || 5000;

// Adding middleware to the stack
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Runs the calculations
app.post('/calculator', function(req, res) {
    console.log('/calulator POST hit', req.body);
    calc.cCalcs(req.body.x, req.body.y, req.body.type);
    history.addToHistory(req.body.x, req.body.y, req.body.type);
    res.sendStatus(201);
});

// Tracks and returns history
app.get('/history', function(req, res) {
    console.log('history allHistory: ', history.allHistory());
    res.send(history.allHistory());
});

// Return calcuations
app.get('/calculator', function(req, res) {
    res.send(calc.returnCalc());
});

// Delete all the things!
app.delete('/clearAll', function(req, res) {
    calc.clearAll();
    history.clearAll();
    res.send('cleared');
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})