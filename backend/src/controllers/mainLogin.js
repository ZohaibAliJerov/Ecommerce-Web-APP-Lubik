require("dotenv").config()
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
require("../db/conn");
const User = require("../models/userModel");

console.log("user signin")

// user login route
router.post("/userlogin", async (req, res) => {
console.log(email)
console.log(password)


  try {
    const { email, password } = req.body;
    // console.log(email)
    if (!email || !password) {
      return res.status(400).json({ message: "please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    // const adminLogin = await Admin.findOne({ email: email });
    // const superAdminLogin = await superAdmin.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ message: "invalid credintials" });
      } else {
        const token = await jwt.sign(
          { _id: userLogin._id },
          console.log("hi"),
          process.env.SECRET_KEY,
          {
            expiresIn: "1 year",
          }
        );
        console.log(token);
        /// varifing userVer
        const userVer = await jwt.verify(
          token,
          process.env.SECRET_KEY
        );
        // console.log(AdminVer);
        res.status(200).json({
          message: "User signed in!",
          _id: userLogin._id,
          email: userLogin.email,
          name: userLogin.username,
          // role: userLogin.role,
          token: token,
          userVer:userVer
        });
      }
      // res.json("userSignin")

    } 
    else {
      res.status(400).send("invalid crediantles");
    }
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
