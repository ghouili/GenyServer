 
 
 
const express = require("express");
const RdvController = require("../controllers/rdv");
const route = express.Router();

route.get("/", RdvController.GetAllData);
route.get("/:id", RdvController.FindDataById);
route.post("/add", RdvController.AddData);
route.put("/:id", RdvController.UpdateData);
route.delete("/:id", RdvController.DeleteData);

module.exports = route;

