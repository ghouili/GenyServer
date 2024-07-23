

const express = require("express");
const GrossesseController = require("../controllers/grossesse");
const route = express.Router();

route.get("/", GrossesseController.GetAllData);
route.get("/:id", GrossesseController.FindDataById);
route.post("/add", GrossesseController.AddData);
route.put("/:id", GrossesseController.UpdateData);
route.delete("/:id", GrossesseController.DeleteData);

module.exports = route;
