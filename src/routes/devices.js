 
const express = require("express");
const DeviceController = require("../controllers/devices");
const route = express.Router();

route.get("/", DeviceController.GetAllData);
route.get("/:id", DeviceController.FindDataById);
route.post("/add", DeviceController.AddData);
route.put("/:id", DeviceController.UpdateData);
route.delete("/:id", DeviceController.DeleteData);

module.exports = route;
