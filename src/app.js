const express = require('express');
const app = express ();
app.use(express.json());

const tennantControllers = require('./controllers/tennant');

app.get('/test',(req, res) => {
    response.status(201).json('Hello World');
});


//Tennant 
app.post('/tennant', tennantControllers.create);

module.exports = app;