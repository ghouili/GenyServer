 
const express = require("express");
const PrescriptionAnalyseBiologiqueController = require("../controllers/prescriptionanalysebiologique");
const route = express.Router();

route.get("/", PrescriptionAnalyseBiologiqueController.GetAllData);
route.get("/:id", PrescriptionAnalyseBiologiqueController.FindDataById);
route.post("/add", PrescriptionAnalyseBiologiqueController.AddData);
route.put("/:id", PrescriptionAnalyseBiologiqueController.UpdateData);
route.delete("/:id", PrescriptionAnalyseBiologiqueController.DeleteData);

module.exports = route;
