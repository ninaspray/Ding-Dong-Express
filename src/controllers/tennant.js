const { request } = require("express");
const { Tennant } = require("../models");
const { Package } = require("../models");

exports.create = (request, response) => {
  Tennant.create(request.body).then((tennant) =>
    response.status(201).json(tennant)
  );
};

exports.list = (request, response) => {
  Tennant.findAll({
    include: [
      {
        model: Package,
        as: "packages",
      },
    ],
  }).then((tennant) => {
    response.status(200).json(tennant);
  });
};

exports.getTennantById = (request, response) => {
  const { id } = request.params;
  Tennant.findByPk(id).then((tennant) => {
    if (!tennant) {
      response.status(404).json({ error: "The tennant could not be found." });
    } else {
      response.status(200).json(tennant);
    }
  });
};

exports.updateTennant = (request, response) => {
  const { id } = request.params;
  Tennant.update(request.body, { where: { id } }).then(([rowsUpdated]) => {
    if (!rowsUpdated) {
      response.status(404).json({ error: "The Tennant could not be found." });
    } else {
      response.status(200).json(rowsUpdated);
    }
  });
};

exports.deleteTennant = (request, response) => {
  const { id } = request.params;
  Tennant.destroy({ where: { id } }).then((idDeleted) => {
    if (!idDeleted) {
      response.status(404).json({ error: "The Tennant could not be found." });
    } else {
      response.status(204).json(idDeleted);
    }
  });
};
