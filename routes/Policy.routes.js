const express = require("express");
const router = express.Router();
const PolicyController = require("../controllers/Policy.controller");
router.post("/", PolicyController.createPolicy);

router.get("/", PolicyController.getPolicies);
router.get("/:id", PolicyController.getPolicyById);
router.put("/:id", PolicyController.updatePolicy);
router.delete("/:id", PolicyController.deletePolicy);
module.exports = router;