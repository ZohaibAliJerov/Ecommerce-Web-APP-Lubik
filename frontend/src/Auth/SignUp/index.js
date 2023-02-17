import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


import {
  HiOutlineMail,
  HiDevicePhoneMobile,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi";
import { RiLock2Line, RiEyeCloseFill } from "react-icons/ri";
import {
  MdOutlinePeople,
  MdRemoveRedEye,
  MdOutlinePhoneIphone,
} from "react-icons/md";
import {
  Main,
  LogoCont,
  Logo,
  FormCont,
  FormHead,
  FormBody,
  Em,
  SvgStyle,
  FormInputDiv,
  FormInput,
  FormSelect,
  FormOption,
  FormButton,
  SwitchCont,
  SwitchPara,
  SwitchSpan,
  TermsConCont,
} from "./SignUpElements";
import LogoMain from "../Images/logo.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);


  // const handleKeyDown = (event) => {
  //   event.preventDefault();
  // };

  // const [firstName, setFirstName] = useState("");
  // console.log(formData.firstName)
  // console.log(firstName)
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [cpassword, setCPassword] = useState("");
  // const [gender, setGender] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name] : value})
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);


    axios
      .post("http://localhost:5000/usersignup", formData)
      .then((res) => {
        const { token } = res.data;
          Cookies.set("accessToken", token);
          if (res.status === 401) {
            console.log("Email already exists");
          } else if (res.status === 201) {
           console.log("Registered Successfully!!");
            setTimeout(() => {
               navigate("/login");
            }, 0);
          }
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Main>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont>
          <FormHead>Sign Up</FormHead>
          <FormBody>
            <FormInputDiv>
              <RiUser3Line style={SvgStyle} />
              <FormInput
                type="text"
                autoComplete="off"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInput}

                placeholder="First name"
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiUser3Line style={SvgStyle} />
              <FormInput
                type="text"
                autoComplete="off"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInput}
                
                placeholder="Last name"
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <MdOutlinePhoneIphone style={SvgStyle} />
              <FormInput
                type="number"
                autoComplete="off"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInput}
                placeholder="Phone Number"
                // onKeyDown={handleKeyDown}
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <HiOutlineMail style={SvgStyle} />
              <FormInput
                type="text"
                autoComplete="off"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInput}
                
                placeholder="Email Address"
                v
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInput}
                
                placeholder="Password"
                autocomplete="off"
              ></FormInput>
              <Em style={SvgStyle}>
                {showPassword ? (
                  <MdRemoveRedEye
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showCPassword ? "text" : "password"}
                autoComplete="off"
                name="cpassword"
                id="cpassword"
                value={formData.cpassword}
                onChange={handleInput}
                
                placeholder="Confirm Password"
              ></FormInput>
              <Em style={SvgStyle}>
                {showCPassword ? (
                  <MdRemoveRedEye
                    onClick={() => setShowCPassword(!showCPassword)}
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={() => setShowCPassword(!showCPassword)}
                  />
                )}
              </Em>
            </FormInputDiv>
            <FormInputDiv>
              <MdOutlinePeople style={SvgStyle} />
              <FormSelect name="gender" id="gender" value={formData.gender} onChange={handleInput}>
                <FormOption>Male</FormOption>
                <FormOption>Female</FormOption>
                <FormOption>Other</FormOption>
              </FormSelect>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
          </FormBody>

          <FormButton type="submit" onClick={handleSubmit}>Sign Up</FormButton>
        </FormCont>
        <SwitchCont>
          <SwitchPara>
            Already having account?{" "}
            <Link to="/signin">
              <SwitchSpan> Log In Here</SwitchSpan>
            </Link>
          </SwitchPara>
        </SwitchCont>

        <TermsConCont>
          <SwitchPara>
            By clicking Sign Up, you agree to our Terms and Conditions. Learn
            how we collect, use and share your data in our Data Policy and how
            we use cookies and similar technology in our Cookies Policy. You may
            receive SMS Notifications from us and can opt out any time.
          </SwitchPara>
        </TermsConCont>
      </Main>
    </>
  );
};

export default SignUp;
