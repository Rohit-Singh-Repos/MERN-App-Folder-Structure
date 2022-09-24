const express = require("express");
const router = express.Router();
const UserDataController = require("../controllers/userdata.controller");

router.post("/saveuserdata",UserDataController.saveData) // Route to save data in database
router.get("/getuserdata",UserDataController.getData) // Route to get data from database
 
module.exports = router
