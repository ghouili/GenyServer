 
 
const express = require("express");
const TentativePMAController = require("../controllers/tentativepma");
const route = express.Router();

route.get("/", TentativePMAController.GetAllData);
route.get("/:id", TentativePMAController.FindDataById);
route.post("/add", TentativePMAController.AddData);
route.put("/:id", TentativePMAController.UpdateData);
route.delete("/:id", TentativePMAController.DeleteData);

module.exports = route;

