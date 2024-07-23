 

const express = require("express");
const TraitementPMAController = require("../controllers/traitementpma");
const route = express.Router();

route.get("/", TraitementPMAController.GetAllData);
route.get("/:id", TraitementPMAController.FindDataById);
route.post("/add", TraitementPMAController.AddData);
route.put("/:id", TraitementPMAController.UpdateData);
route.delete("/:id", TraitementPMAController.DeleteData);

module.exports = route;

