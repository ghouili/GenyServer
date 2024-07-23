

const express = require("express");
const TentativeHistoriquePMAController = require("../controllers/tentativehistoriquepma");
const route = express.Router();

route.get("/", TentativeHistoriquePMAController.GetAllData);
route.get("/:id", TentativeHistoriquePMAController.FindDataById);
route.post("/add", TentativeHistoriquePMAController.AddData);
route.put("/:id", TentativeHistoriquePMAController.UpdateData);
route.delete("/:id", TentativeHistoriquePMAController.DeleteData);

module.exports = route;

