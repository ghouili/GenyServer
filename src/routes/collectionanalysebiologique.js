
const express = require("express");
const CollectionAnalyseBiologiqueController = require("../controllers/collectionanalysebiologique");
const route = express.Router();

route.get("/", CollectionAnalyseBiologiqueController.GetAllData);
route.get("/:id", CollectionAnalyseBiologiqueController.FindDataById);
route.post("/add", CollectionAnalyseBiologiqueController.AddData);
route.put("/:id", CollectionAnalyseBiologiqueController.UpdateData);
route.delete("/:id", CollectionAnalyseBiologiqueController.DeleteData);

module.exports = route;
