 
const express = require("express");
const ParamCompteController = require("../controllers/parametrecompte");
const route = express.Router();

route.get("/", ParamCompteController.GetAllData);
route.get("/:id", ParamCompteController.FindDataById);
route.post("/add", ParamCompteController.AddData);
route.put("/:id", ParamCompteController.UpdateData);
route.delete("/:id", ParamCompteController.DeleteData);

module.exports = route;
