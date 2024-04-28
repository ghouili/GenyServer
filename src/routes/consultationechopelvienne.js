 

const express = require("express");
const EchoPelvienneController = require("../controllers/consultationechopelvienne");
const route = express.Router();

route.get("/", EchoPelvienneController.GetAllData);
route.get("/:id", EchoPelvienneController.FindDataById);
route.post("/add", EchoPelvienneController.AddData);
route.put("/:id", EchoPelvienneController.UpdateData);
route.delete("/:id", EchoPelvienneController.DeleteData);

module.exports = route;
