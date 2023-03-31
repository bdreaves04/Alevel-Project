const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//hashes passwords
const bcrypt = require("bcrypt");
//validates strong passwords
const validator = require("validator");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.signup = async function (username, password) {
  //checking fields filled properly
  if (!username || !password) {
    throw Error("all fields need completing");
  }

  //checking if username exists in db already, if it does throw error
  const exists = await this.findOne({ username });
  if (exists) {
    throw Error("username already in use");
  }

  //checking password is strong
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not Strong Enough");
  }

  //hashing password with a salt for security in db
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, password: hash });
  return user;
};

//login methods
userSchema.statics.login = async function (username, password) {
  // if any fields are null then error thrown
  if (!username || !password) {
    throw Error("all fields need completing");
  }

  const user = await this.findOne({ username });
  if (!user) {
    throw Error("Incorrect User Details");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect User Details");
  }

  return user;
};

userSchema.statics.changePassword = async function (
  username,
  passwordOld,
  passwordNew
) {
  // if any fields are null then error thrown
  if (!username || !passwordNew || !passwordOld) {
    throw Error("all fields need completing");
  }

  const user = await this.findOne({ username });

  if (!user) throw Error("user doesnt exist");

  if (!validator.isStrongPassword(passwordNew))
    throw Error("Password not Strong Enough");

  // hashing password before storing in the database
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passwordNew, salt);

  user.password = hash;

  await user.save();

  return user;
};

module.exports = mongoose.model("User", userSchema);
