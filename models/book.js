const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  author:{type:mongoose.Schema.Types.ObjectId, ref:'Author'},
  category:[{type:mongoose.Schema.Types.ObjectId, ref:'Category'}],
});

module.exports = mongoose.model('Book', bookSchema);