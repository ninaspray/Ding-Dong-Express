const express = require('express');
const app = express ();
const cors = require('cors'); 
app.use(cors());

const tennantControllers = require('./controllers/tennant');
const packageControllers = require('./controllers/package');
const { Router } = require('express');

app.get('/test',(req, res) => {
    response.status(201).json('Hello World');
});

//Router("*", cors());
app.use(express.json());

//Tennant 
app.post('/tennants', tennantControllers.create);
app.get('/tennants',tennantControllers.list);
app.get('/tennants/:id', tennantControllers.getTennantById);
app.patch('/tennants/:id', tennantControllers.updateTennant);
app.delete('/tennants/:id', tennantControllers.deleteTennant);

//Package
app.post('/tennants/:tennantId/packages', packageControllers.create);
app.get('/package', packageControllers.getPackage);
app.get('/package/:packageId', packageControllers.getPackageById);
app.patch('/package/:packageId', packageControllers.updatePackage);


module.exports = app;