const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: {
    type: String,
    enum: [
      "Horror",
      "Mystery",
      "Fantasy",
      "Science Fiction",
      "Romance",
      "Adventure",
      "Thriller",
      "Non-Fiction",
      "Historical Fiction",
      "Drama",
    ],
    required: true,
    index: {
      unique: true,
      dropDups: true
    }
  },
});

module.exports = mongoose.model("Category", categorySchema);