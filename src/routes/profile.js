 
 
const express = require("express");
const ProfileController = require("../controllers/profile");
const route = express.Router();

route.get("/", ProfileController.GetAllData);
route.get("/:id", ProfileController.FindDataById);
route.post("/add", ProfileController.AddData);
route.put("/:id", ProfileController.UpdateData);
route.delete("/:id", ProfileController.DeleteData);

module.exports = route;

