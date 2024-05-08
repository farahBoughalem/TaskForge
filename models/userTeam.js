const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTeamSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  team: { type: Schema.Types.ObjectId, ref: 'Team' }
},{timestamps: true});

const UserTeam = mongoose.model('UserTeam', userTeamSchema);
module.exports = UserTeam;
