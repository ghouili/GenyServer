const express = require("express");
const PrescriptionController = require('../controllers/prescription');

const route = express.Router();

route.get("/prescription", PrescriptionController.prescription);


module.exports = route;
