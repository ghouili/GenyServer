 

 
const express = require("express");
const DonnesFoetusController = require("../controllers/donnesfoetus");
const route = express.Router();

route.get("/", DonnesFoetusController.GetAllData);
route.get("/:id", DonnesFoetusController.FindDataById);
route.post("/add", DonnesFoetusController.AddData);
route.put("/:id", DonnesFoetusController.UpdateData);
route.delete("/:id", DonnesFoetusController.DeleteData);

module.exports = route;
