const express = require("express");
const app = express();
const mongoose = require("mongoose");
const claimRoutes = require("./routes/Claim.routes");
const policyRoutes = require("./routes/Policy.routes");
const userRoutes = require("./routes/User.routes");

mongoose.connect("mongodb://localhost/cms", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use("/api/claims", claimRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));