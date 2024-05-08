const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  project:{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  status: {
    type: String,
    enum: ["Not Started", "On Track", "At Risk", "Off Track", "Paused", "Done"],
    default: "Not Started",
    required: true
  }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
