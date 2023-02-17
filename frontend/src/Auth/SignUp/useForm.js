import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const useForm = () => {
  const navigate = useNavigate();

  const [userCreds, setUserCreds] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
  });
  const [statusMsg, setStatusMsg] = useState("");

  const handleUserCreds = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    setUserCreds({ ...userCreds, [Name]: Value });
  };

  const HandleUserSignUp = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      cpassword,
      gender
    } = userCreds;

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !password ||
      !cpassword ||
      !gender
    ) {
      setStatusMsg("All fields are required!");
    } else if (!email.endsWith("@gmail.com")) {
      setStatusMsg("Email is Invalid!");
    } else if (password !== cpassword) {
      setStatusMsg("Password is Not Matching!");
    } else {
      axios
        .post("http://localhost:5000/usersignup", {
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          cpassword,
          gender,
        })
        .then((data) => {
          const { token } = data.data;
          Cookies.set("accessToken", token);

          if (data.status === 401) {
            setStatusMsg("Email already exists");
          } else if (data.status === 201) {
            setStatusMsg("Registered Successfully!!");
            setTimeout(() => {
               navigate("/signin");
            }, 0);
          }
          console.log("sadadadasdadadsaS")
          console.log(data);
        });
    }
  };

  return { handleUserCreds, HandleUserSignUp, statusMsg };
};

export default useForm;
