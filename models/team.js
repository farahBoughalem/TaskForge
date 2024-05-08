const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  members: [{ type: Schema.Types.ObjectId, ref: 'UserTeam' }]
},{timestamps: true});

teamSchema.methods.hasAtLeastOneMember = () =>{
  return this.members.length > 0;
};

teamSchema.pre('save', (next) => {
  if (!this.hasAtLeastOneMember()) {
    next(new Error('Team must have at least one member'));
  } else {
    next();
  }
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
