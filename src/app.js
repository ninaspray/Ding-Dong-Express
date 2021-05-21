const express = require('express');
const app = express ();
app.use(express.json());

const tennantControllers = require('./controllers/tennant');
const packageControllers = require('./controllers/package');

app.get('/test',(req, res) => {
    response.status(201).json('Hello World');
});


//Tennant 
app.post('/tennant', tennantControllers.create);
app.get('/tennant', tennantControllers.list);
app.get('/tennant/:id', tennantControllers.getTennantById);
app.patch('/tennant/:id', tennantControllers.updateTennant);
app.delete('/tennant/:id', tennantControllers.deleteTennant);

//Package
app.post('/tennant/:id/package', packageControllers.create);
app.get('/package', packageControllers.getPackage);
app.get('/package/:packageId', packageControllers.getPackageById);
app.patch('/package/:packageId', packageControllers.updatePackage);


module.exports = app;