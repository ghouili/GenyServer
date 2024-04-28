 

const express = require("express");
const ConsultationGynecologiqueController = require("../controllers/consultationgynecologique");
const route = express.Router();

route.get("/", ConsultationGynecologiqueController.GetAllData);
route.get("/:id", ConsultationGynecologiqueController.FindDataById);
route.post("/add", ConsultationGynecologiqueController.AddData);
route.put("/:id", ConsultationGynecologiqueController.UpdateData);
route.delete("/:id", ConsultationGynecologiqueController.DeleteData);

module.exports = route;
