const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTaskSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  task: { type: Schema.Types.ObjectId, ref: 'Task' }
},{timestamps: true});

const UserTask = mongoose.model('UserTask', userTaskSchema);
module.exports = UserTask;
