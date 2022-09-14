const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  note: [
    {
      content: { type: String },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  clientId: { type: String },
});

module.exports = mongoose.model("Member", memberSchema);
