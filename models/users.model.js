// const { v4: uuidv4 } = require("uuid");
// const users = [
//   {
//     id: uuidv4(),
//     username: "Nazmul Hasan",
//     email: "lalalal@yahoo.com",
//   },
//   {
//     id: uuidv4(),
//     username: "Rakibul Islam",
//     email: "lalalal@yahoo.com",
//   },
// ];

//const { request } = require("../app")

// module.exports = users;

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  createOn: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("user", userSchema);
