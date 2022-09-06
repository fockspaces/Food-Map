const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  body: String,
  rating: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: { yy: String, mm: String, dd: String },
});

module.exports = mongoose.model("Review", reviewSchema);
