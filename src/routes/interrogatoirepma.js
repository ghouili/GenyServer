 
const express = require("express");
const InterrogatoirePMAController = require("../controllers/interrogatoirepma");
const route = express.Router();

route.get("/", InterrogatoirePMAController.GetAllData);
route.get("/:id", InterrogatoirePMAController.FindDataById);
route.post("/add", InterrogatoirePMAController.AddData);
route.put("/:id", InterrogatoirePMAController.UpdateData);
route.delete("/:id", InterrogatoirePMAController.DeleteData);

module.exports = route;
