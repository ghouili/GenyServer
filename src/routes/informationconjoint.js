 

const express = require("express");
const InformationConjointController = require("../controllers/informationconjoint");
const route = express.Router();

route.get("/", InformationConjointController.GetAllData);
route.get("/:id", InformationConjointController.FindDataById);
route.post("/add", InformationConjointController.AddData);
route.put("/:id", InformationConjointController.UpdateData);
route.delete("/:id", InformationConjointController.DeleteData);

module.exports = route;
