// models/policy.js
const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policy_id: { type: String, required: true, unique: true },
    policy_name: { type: String, required: true },
    premium_amount: { type: Number, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
