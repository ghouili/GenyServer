 
 
 
const express = require("express");
const ReglementsController = require("../controllers/reglements");
const route = express.Router();

route.get("/", ReglementsController.GetAllData);
route.get("/:id", ReglementsController.FindDataById);
route.post("/add", ReglementsController.AddData);
route.put("/:id", ReglementsController.UpdateData);
route.delete("/:id", ReglementsController.DeleteData);

module.exports = route;

