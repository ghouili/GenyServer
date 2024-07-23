const express = require("express");
const ConsultationColposcopieController = require("../controllers/consultationcolposcopie");
const route = express.Router();

route.get("/", ConsultationColposcopieController.GetAllData);
route.get("/:id", ConsultationColposcopieController.FindDataById);
route.post("/add", ConsultationColposcopieController.AddData);
route.put("/:id", ConsultationColposcopieController.UpdateData);
route.delete("/:id", ConsultationColposcopieController.DeleteData);

module.exports = route;
