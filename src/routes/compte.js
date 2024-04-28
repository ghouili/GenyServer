

const express = require("express");
const CompteController = require("../controllers/compte");
const route = express.Router();

route.get("/", CompteController.GetAllData);
route.get("/:id", CompteController.FindDataById);
route.post("/add", CompteController.AddData);
route.put("/:id", CompteController.UpdateData);
route.delete("/:id", CompteController.DeleteData);

module.exports = route;
