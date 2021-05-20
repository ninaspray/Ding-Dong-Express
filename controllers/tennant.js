const { request } = require('express');
const tennant = require('../src/models/tennant');
const { Tennant } = require('../src/models/tennant');

exports.create = (request, response) => {
    Tennant.create(request.body).then(tennant => response.status(201).json(artist));
  };