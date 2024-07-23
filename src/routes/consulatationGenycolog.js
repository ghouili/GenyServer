const express = require("express");
const ConsulatationGenycologController = require("../controllers/consulatationGenycolog");
const route = express.Router();

route.get("/", ConsulatationGenycologController.GetAllData);
route.get("/:id", ConsulatationGenycologController.FindDataById);
route.post("/add", ConsulatationGenycologController.AddData);
route.put("/:id", ConsulatationGenycologController.UpdateData);
route.delete("/:id", ConsulatationGenycologController.DeleteData);

module.exports = route;
