 
const express = require("express");
const ResultatAnalyseBiologiqueController = require("../controllers/resultatanalysebiologique");
const route = express.Router();

route.get("/", ResultatAnalyseBiologiqueController.GetAllData);
route.get("/:id", ResultatAnalyseBiologiqueController.FindDataById);
route.post("/add", ResultatAnalyseBiologiqueController.AddData);
route.put("/:id", ResultatAnalyseBiologiqueController.UpdateData);
route.delete("/:id", ResultatAnalyseBiologiqueController.DeleteData);

module.exports = route;

