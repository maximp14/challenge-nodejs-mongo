require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 3003;

connectDB();

app.use(express.json());

app.use("/client", require("./routes/client-routes"));
app.use("/member", require("./routes/member-routes"));

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
