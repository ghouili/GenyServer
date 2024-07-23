 
const express = require("express");
const SRConsultationController = require("../controllers/srconsultation");
const route = express.Router();

route.get("/", SRConsultationController.GetAllData);
route.get("/:id", SRConsultationController.FindDataById);
route.post("/add", SRConsultationController.AddData);
route.put("/:id", SRConsultationController.UpdateData);
route.delete("/:id", SRConsultationController.DeleteData);

module.exports = route;

