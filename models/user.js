const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {type: String,required: true,unique: true,},
  password: { type: String, required: true },
  role: { type: String, enum: ["author", "reader"], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book",unique: true}],
});

module.exports = mongoose.model("User", userSchema);
