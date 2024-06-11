const express = require("express");
const router = express.Router();
const {
  createClaim,
  getClaims,
  getClaimById,
  updateClaim,
  deleteClaim,
  updateClaimStatus,
} = require("../controllers/Claim.controller");

router.post("/", createClaim);
router.get("/", getClaims);
router.get("/:id", getClaimById);
router.put("/:id", updateClaim);
router.patch("/:id", updateClaimStatus);
router.delete("/:id", deleteClaim);

module.exports = router;