const express = require("express");
const analysebiologiqueController = require("../controllers/analysebiologique");
const route = express.Router();

route.get("/", analysebiologiqueController.GetAllData);
route.get("/:id", analysebiologiqueController.FindDataById);
route.post("/add", analysebiologiqueController.AddData);
route.put("/:id", analysebiologiqueController.UpdateData);
route.delete("/:id", analysebiologiqueController.DeleteData);

module.exports = route;
