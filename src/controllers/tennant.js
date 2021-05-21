const { request } = require('express');
const { Tennant } = require('../models');


exports.create = (request, response) => {
    Tennant.create(request.body).then(tennant => response.status(201).json(tennant));
  };
