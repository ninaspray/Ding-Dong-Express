const {request, response} = require('express');
const { Tennant } = require('../models');
const { Package } = require('../models');
const tennant = require('../models/tennant');

exports.create = (request, response) => {
    const data = request.body
    data.TennantId = +request.params.tennantId
    Tennant.findByPk(request.params.tennantId).then(packageDocument => {
        if (!packageDocument) response.status(404).json({ error: "The tennant could not be found." })
        else { console.log(data)
             Package.create(data).then(packageDocument => response.status(201).json(packageDocument))
        } 
    })};

exports.getPackage = (request, response) => {
        Package.findAll()
        .then(package => 
        response.status(201)
        .json(package));
};


exports.getPackagesByTenanntsId = (request, response) => {
    const { tennantId } = request.params;
    
    Tennant.findByPk(tennantId).then((tennant) => {
        if (!tennant) {
            response.status(404).json({error: "The Tennant could not be found."});
        } else {
            Package.findAll({
                where: { tennantId : tennantId },
            //     include: [{
            //         model: Tennant,
            //         as: 'tennant' 
            //     },
            // ],   
            })
            .then((packages) => {
                response.status(200).json(packages);
            })
            .catch(console.error);
        }
    });
};


exports.getPackageById = (request, response) => {
    Package.findByPk(request.params.packageId)
         .then(packageDocument => {
         if (!packageDocument) response.status(404).json({ error: "The package could not be found." });
         else response.status(200).json(packageDocument);
        })
    };


exports.updatePackage = (request, response) => {
    Package.update(request.body, { where: { id: request.params.packageId } })
        .then(rowsUpdated => {
         Package.findByPk(request.params.packageId)
        .then(requestedPackage => {
        if(!rowsUpdated[0]){
                response.status(404).json({ error: "The package could not be found", requestedPackage })
              } else {
                response.status(200).json({ updatedPackage: requestedPackage })
              }
            })
        });};    