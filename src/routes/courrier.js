const express = require("express");
const CourrierController = require('../controllers/courrier');

const route = express.Router();

route.get("/all", CourrierController.GetAllData);


module.exports = route