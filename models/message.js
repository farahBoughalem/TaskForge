const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  }
},{timestamps: true});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
