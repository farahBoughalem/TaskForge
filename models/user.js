const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const { SALT_WORK_FACTOR }  = require("../config");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    index:{ unique: true }
  },
  firstName: {
    type: String,
    require: true
  },
  lastName:{
    type: String,
    required: true
  },
  profile: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true,
    validate: {
      validator: isEmail,
      message: "invalid email"
    }
  },
  password:{
    type: String,
    required: true
  }
},{timestamps: true});

userSchema.pre('save', (next) => {
  const user = this;
  // only hash the password if it's modified or new
  if(!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if(err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  })
});

// add a method to compare the password during the log in
userSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
