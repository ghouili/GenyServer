 
const express = require("express");
const CourrierController = require("../controllers/courrier");
const route = express.Router();

route.get("/", CourrierController.GetAllData);
route.get("/:id", CourrierController.FindDataById);
route.post("/add", CourrierController.AddData);
route.put("/:id", CourrierController.UpdateData);
route.delete("/:id", CourrierController.DeleteData);

module.exports = route;
