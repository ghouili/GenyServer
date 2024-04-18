 
 
 
const express = require("express");
const MyomeController = require("../controllers/myome");
const route = express.Router();

route.get("/", MyomeController.GetAllData);
route.get("/:id", MyomeController.FindDataById);
route.post("/add", MyomeController.AddData);
route.put("/:id", MyomeController.UpdateData);
route.delete("/:id", MyomeController.DeleteData);

module.exports = route;
