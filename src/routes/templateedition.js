 
 
const express = require("express");
const TemplateEditionController = require("../controllers/templateedition");
const route = express.Router();

route.get("/", TemplateEditionController.GetAllData);
route.get("/:id", TemplateEditionController.FindDataById);
route.post("/add", TemplateEditionController.AddData);
route.put("/:id", TemplateEditionController.UpdateData);
route.delete("/:id", TemplateEditionController.DeleteData);

module.exports = route;

