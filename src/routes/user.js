const express = require("express");
const userController = require("../controllers/user");
const filepload = require('../middlewares/UploadFile')
const route = express.Router();

route.get("/", userController.GetAllData);
route.get("/:id", userController.FindDataById);
route.post("/add", filepload.single('avatar'), userController.AddData);
route.put("/:id", filepload.single('avatar'), userController.UpdateData);
route.delete("/:id", userController.DeleteData);

module.exports = route;
