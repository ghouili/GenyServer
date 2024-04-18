const express = require("express");
const adresseController = require("../controllers/adresse");
const route = express.Router();

route.get("/", adresseController.GetAllData);
route.get("/:id", adresseController.FindDataById);
route.post("/add", adresseController.AddData);
route.put("/:id", adresseController.UpdateData);
route.delete("/:id", adresseController.DeleteData);

module.exports = route;
