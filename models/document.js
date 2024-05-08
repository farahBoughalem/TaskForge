const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  data: Object,
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }
},{timestamps: true});

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;
