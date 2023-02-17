const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("../db/conn");
const User = require("../models/userModel");

router.post("/usersignup", async (req, res) => {
  console.log("ASdsadassdasdaddd")
  const {firstName, lastName, phoneNumber, email, password, cpassword, gender,
  } = req.body;
  // console.log("SDadadafdafdsfsf")
  if (!firstName || !lastName || !phoneNumber || !email || !password || !cpassword || !gender) {
    return res.json({ message: "please fill the required fields" });
  }else if(!email.endsWith("@gmail.com")){
    return res.json({ message: "Email format is Invalid" });
  }else{
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ message: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(421).json({ message: "password is not matching" });
    } else {
      const bpassword = await bcrypt.hash(password, 10);
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        password: bpassword
      });

      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
    // console.log("Api runing successfully");
  } catch (err) {
    console.log(err);
  }
}
});

  // get all user
router.get("/getusers", async (req, res) => {
  try {
    const getUsers = await User.find();
    if (getUsers[0]===undefined) {
      res.status(400).json({ message: "No any User registered." });
      console.log("no any user register yet")
    }else{
      res.status(200).json(getUsers);
      // console.log(getUsers)
    }
  }
  catch(err){
    // console.log(err)
    console.log("Server error")
    res.status(500).json({ message: "Server error" });
  }   
});

router.post("/userlogin", async (req, res) => {
  
  
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
            process.env.SECRET_KEY,
            {
              expiresIn: "1 year",
            }
          );
          console.log(token);
          // / varifing userVer
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
        res.json("userSignin")
  
      } 
      else {
        res.status(400).send("invalid crediantles");
      }
    } catch (err) {
      console.log(err);
    }
  
  });

module.exports = router;
