const Claim = require("../models/Claim.model");


exports.createClaim = async (req, res) => {
  try {
    const newClaim = new Claim(req.body);
    await newClaim.save();
    res.status(201).json(newClaim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClaims = async (req, res) => {
  try {
    const claims = await Claim.find();
    res.status(200).json(claims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getClaimById = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }
    res.status(200).json(claim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClaim = async (req, res) => {
  try {
    const updatedClaim = await Claim.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClaim) {
      return res.status(404).json({ message: "Claim not found" });
    }
    res.status(200).json(updatedClaim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteClaim = async (req, res) => {
  try {
    const deletedClaim = await Claim.findByIdAndDelete(req.params.id);
    if (!deletedClaim) {
      return res.status(404).json({ message: "Claim not found" });
    }
    res.status(200).json({ message: "Claim deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// New function to update claim status
exports.updateClaimStatus = async (req, res) => {
  try {
    const updatedClaim = await Claim.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!updatedClaim) {
      return res.status(404).json({ message: "Claim not found" });
    }
    res.status(200).json(updatedClaim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  exports.getClaimsByUserId = async (req, res) => {
    try {
      const userId = req.params.user_id;
      const claims = await Claim.find({ userId });
      res.status(200).json(claims);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};