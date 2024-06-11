const express = require("express");
const router = express.Router();
const userController = require("../controllers/User.controller");

// Import your User model
const User = require("../models/User.model");

// Define your User routes here
router.post("/", userController.createUser);

router.get("/", userController.getUsers);
// Export the router instance
module.exports = router;