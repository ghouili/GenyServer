 
 
const express = require("express");
const EtablissementController = require("../controllers/etablissement");
const route = express.Router();

route.get("/", EtablissementController.GetAllData);
route.get("/:id", EtablissementController.FindDataById);
route.post("/add", EtablissementController.AddData);
route.put("/:id", EtablissementController.UpdateData);
route.delete("/:id", EtablissementController.DeleteData);

module.exports = route;
