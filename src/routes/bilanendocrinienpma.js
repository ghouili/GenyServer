

const express = require("express");
const BilanEndocrinienPMAController = require("../controllers/bilanendocrinienpma");
const route = express.Router();

route.get("/", BilanEndocrinienPMAController.GetAllData);
route.get("/:id", BilanEndocrinienPMAController.FindDataById);
route.post("/add", BilanEndocrinienPMAController.AddData);
route.put("/:id", BilanEndocrinienPMAController.UpdateData);
route.delete("/:id", BilanEndocrinienPMAController.DeleteData);

module.exports = route;
