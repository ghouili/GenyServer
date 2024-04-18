const express = require("express");
const antecedentsController = require("../controllers/antecedents");
const route = express.Router();

route.get("/", antecedentsController.GetAllData);
route.get("/:id", antecedentsController.FindDataById);
route.post("/add", antecedentsController.AddData);
route.put("/:id", antecedentsController.UpdateData);
route.delete("/:id", antecedentsController.DeleteData);

module.exports = route;
