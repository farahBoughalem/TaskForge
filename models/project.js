const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  deadline: {
    type: Date
  },
  status: {
    type: String,
    enum: ["Not Started", "On Track", "At Risk", "Off Track", "Paused", "Done"],
    default: "Not Started",
    required: true
  },
  team:{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }
},{ timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
