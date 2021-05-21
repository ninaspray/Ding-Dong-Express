const tennant = require('../models/tennant');
const { Tennant } = require('../models/tennant');

exports.create = (req, res) => {
  Tennant.create(req.body).then(tennant => res.status(201).json(tennant));
};