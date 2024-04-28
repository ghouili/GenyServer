

const express = require("express");
const PatientController = require("../controllers/patient");
const route = express.Router();

route.get("/", PatientController.GetAllData);
route.get("/:id", PatientController.FindDataById);
route.post("/add", PatientController.AddData);
route.put("/:id", PatientController.UpdateData);
route.delete("/:id", PatientController.DeleteData);

module.exports = route;
