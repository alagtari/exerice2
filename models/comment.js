const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: { type: String, required: true },
  date:{type:String , required:true},
  user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
});

module.exports = mongoose.model('Comment', commentSchema);