 

 
const express = require("express");
const EchoElevenController = require("../controllers/ehoelevensa");
const route = express.Router();

route.get("/", EchoElevenController.GetAllData);
route.get("/:id", EchoElevenController.FindDataById);
route.post("/add", EchoElevenController.AddData);
route.put("/:id", EchoElevenController.UpdateData);
route.delete("/:id", EchoElevenController.DeleteData);

module.exports = route;
