const express = require("express");
const InformationMutuelleController = require('../controllers/informationmutuelle');

const route = express.Router();

route.get("/informationmutuelle", InformationMutuelleController.informationmutuelle);


module.exports = route