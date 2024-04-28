 

const express = require("express");
const TraitementValeurPMAController = require("../controllers/traitementvaleurpma");
const route = express.Router();

route.get("/", TraitementValeurPMAController.GetAllData);
route.get("/:id", TraitementValeurPMAController.FindDataById);
route.post("/add", TraitementValeurPMAController.AddData);
route.put("/:id", TraitementValeurPMAController.UpdateData);
route.delete("/:id", TraitementValeurPMAController.DeleteData);

module.exports = route;

