const express = require("express");
const AllergieController = require("../controllers/Allergie");
const route = express.Router();

route.get("/", AllergieController.GetAllData);
route.get("/:id", AllergieController.FindDataById);
route.post("/add", AllergieController.AddData);
route.put("/:id", AllergieController.UpdateData);
route.delete("/:id", AllergieController.DeleteData);

module.exports = route;
