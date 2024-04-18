 
 
const express = require("express");
const LigneReglementsController = require("../controllers/lignereglement");
const route = express.Router();

route.get("/", LigneReglementsController.GetAllData);
route.get("/:id", LigneReglementsController.FindDataById);
route.post("/add", LigneReglementsController.AddData);
route.put("/:id", LigneReglementsController.UpdateData);
route.delete("/:id", LigneReglementsController.DeleteData);

module.exports = route;
