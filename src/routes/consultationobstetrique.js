 

const express = require("express");
const ConsultationObstetriqueController = require("../controllers/consultationobstetrique");
const route = express.Router();

route.get("/", ConsultationObstetriqueController.GetAllData);
route.get("/:id", ConsultationObstetriqueController.FindDataById);
route.post("/add", ConsultationObstetriqueController.AddData);
route.put("/:id", ConsultationObstetriqueController.UpdateData);
route.delete("/:id", ConsultationObstetriqueController.DeleteData);

module.exports = route;
