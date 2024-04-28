 
 
const express = require("express");
const SpermogrammePMAController = require("../controllers/spermogramme");
const route = express.Router();

route.get("/", SpermogrammePMAController.GetAllData);
route.get("/:id", SpermogrammePMAController.FindDataById);
route.post("/add", SpermogrammePMAController.AddData);
route.put("/:id", SpermogrammePMAController.UpdateData);
route.delete("/:id", SpermogrammePMAController.DeleteData);

module.exports = route;

