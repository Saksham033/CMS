const Policy = require("../models/Policy.model");
exports.createPolicy = async (req, res) => {
try {
const newPolicy = new Policy(req.body);
await newPolicy.save();
res.status(201).json(newPolicy);
} catch (error) {
res.status(500).json({ message: error.message });
}
};
exports.getPolicies = async (req, res) => {
try {
const policies = await Policy.find();
res.status(200).json(policies);
} catch (error) {
res.status(500).json({ message: error.message });
}
};
exports.getPolicyById = async (req, res) => {
try {
const policy = await Policy.findById(req.params.id);
res.status(200).json(policy);
} catch (error) {
res.status(500).json({ message: error.message });
}
};
exports.updatePolicy = async (req, res) => {
try {
const updatedPolicy = await Policy.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);
res.status(200).json(updatedPolicy);
} catch (error) {
res.status(500).json({ message: error.message });
}
};
exports.deletePolicy = async (req, res) => {
try {
await Policy.findByIdAndDelete(req.params.id);
res.status(200).json({ message: "Policy deleted" });
} catch (error) {
res.status(500).json({ message: error.message });
}
};