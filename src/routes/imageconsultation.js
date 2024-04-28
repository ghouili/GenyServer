 

const express = require("express");
const ImageConsultationController = require("../controllers/imageconsultation");
const route = express.Router();

route.get("/", ImageConsultationController.GetAllData);
route.get("/:id", ImageConsultationController.FindDataById);
route.post("/add", ImageConsultationController.AddData);
route.put("/:id", ImageConsultationController.UpdateData);
route.delete("/:id", ImageConsultationController.DeleteData);

module.exports = route;
