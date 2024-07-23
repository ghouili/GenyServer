
const express = require("express");
const WorkListItemController = require("../controllers/worklistitem");
const route = express.Router();

route.get("/", WorkListItemController.GetAllData);
route.get("/:id", WorkListItemController.FindDataById);
route.post("/add", WorkListItemController.AddData);
route.put("/:id", WorkListItemController.UpdateData);
route.delete("/:id", WorkListItemController.DeleteData);

module.exports = route;

