const express = require("express");
const OrdonnancesController = require('../controllers/ordonnaces');

const route = express.Router();

route.get("/ordonnaces", OrdonnancesController.ordonnances);


module.exports = route