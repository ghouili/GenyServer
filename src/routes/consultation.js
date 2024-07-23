
const express = require("express");
const ConsultationController = require("../controllers/consultation");
const route = express.Router();

route.get("/", ConsultationController.GetAllData);
route.get("/:id", ConsultationController.FindDataById);
route.post("/add", ConsultationController.AddData);
route.put("/:id", ConsultationController.UpdateData);
route.delete("/:id", ConsultationController.DeleteData);

module.exports = route;
