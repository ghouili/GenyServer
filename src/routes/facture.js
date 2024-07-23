 
 
const express = require("express");
const FactureController = require("../controllers/facture");
const route = express.Router();

route.get("/", FactureController.GetAllData);
route.get("/:id", FactureController.FindDataById);
route.post("/add", FactureController.AddData);
route.put("/:id", FactureController.UpdateData);
route.delete("/:id", FactureController.DeleteData);

module.exports = route;
