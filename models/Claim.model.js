const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
  policyId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  claimAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Claim", ClaimSchema);