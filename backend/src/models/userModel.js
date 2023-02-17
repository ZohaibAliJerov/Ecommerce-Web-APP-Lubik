const validator = require("validator");
const mongoose = require("mongoose");
require("../db/conn")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
  },

  lastName: {
    type: String,
    required: true,
    minlength: 3,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"]
  },
});

// we  will create new collection

const user = new mongoose.model("user", userSchema);

// exporting this module
module.exports = user;
