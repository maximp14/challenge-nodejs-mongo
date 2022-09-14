const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  companyName: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  headCount: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Client", clientSchema);
