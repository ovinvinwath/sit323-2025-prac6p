// write following in terminal: node server.js
// to start calculator and follow instructions

//server setup and run code
const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`The Calculator microservice is running on http://localhost:${port}`);
});

//Welcome msg to avoid Cannot GET/ routing error
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice! Use the following web URL format on the search bar to use the calculator => "http://localhost:8080/[Function]?num1=[]&num2=[]" | Functions include add, subtract, multiply, divide ');
});


//HTTP Endpoints for calculator function

//Addition endpoint
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid Numbers have been entered!');
    }
    //result display
    const result = num1 + num2;
    res.send(`Result: ${result}`);

});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers!');
    }
    //result display
    const result = num1 - num2;
    res.send(`Result: ${result}`);
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers!');
    }
    //result display
    const result = num1 * num2;
    res.send(`Result: ${result}`);
});

// Division endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers!');
    }
    //0 division error incase someone tries it
    if (num2 === 0) {
        return res.status(400).send('Division by zero is undefined!');
    }
    //result display
    const result = num1 / num2;
    res.send(`Result: ${result}`);
});