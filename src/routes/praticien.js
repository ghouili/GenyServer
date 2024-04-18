 
 
const express = require("express");
const PraticienController = require("../controllers/praticien");
const route = express.Router();

route.get("/", PraticienController.GetAllData);
route.get("/:id", PraticienController.FindDataById);
route.post("/add", PraticienController.AddData);
route.put("/:id", PraticienController.UpdateData);
route.delete("/:id", PraticienController.DeleteData);

module.exports = route;
