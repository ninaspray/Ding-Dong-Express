const express = require('express');
const tennantControllers = require('./controllers/tennant');
const app = express ();

app.get('/test',(request, response) => {
    response.status(201).json('Hello World');
});

app.use(express.json());
//Tennant

app.post('/tennant', tennantControllers.create);

module.exports = app;