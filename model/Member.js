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
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
});

module.exports = mongoose.model("Member", memberSchema);
