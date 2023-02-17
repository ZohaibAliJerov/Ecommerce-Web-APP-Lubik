import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import Cookies from "js-cookie";
import {
  RiLock2Line,
  RiEyeCloseFill,
  RiFacebookFill,
  RiTwitterFill,
} from "react-icons/ri";

import { MdRemoveRedEye } from "react-icons/md";
import { IoLogoGoogleplus } from "react-icons/io";
import {
  Main,
  AppName,
  AppSlogan,
  LogoCont,
  Logo,
  FormCont,
  FormHead,
  FormBody,
  Em,
  SvgStyle,
  FormInputDiv,
  FormInput,
  ForgotPassword,
  CreateAccount,
  FormButton,
  FormParaStatus,
  SocialLoginDiv,
  SvgSocialLogo,
  SocialLoginNames,
  GuestCont,
  GuestLoginDiv,
  GuestLoginNames,
} from "./SignInElements";
import LogoMain from "../Images/logo.jpg";
// import useForm from "./useForm";

const SignIn = (e) => {
  const navigate = useNavigate();

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  // const facebook = () => {
  //   window.open("http://localhost:5000/auth/facebook", "_self");
  // };

  // const twitter = () => {
  //   window.open("http://localhost:5000/auth/twitter", "_self");
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    let a = 12;

    if (!email || !password) {
      return "All fields are required!";
    } else if (!email.endsWith("@gmail.com")) {
      return "Email or Password is Invalid!";
    } else {
      axios
        .post("http://localhost:5000/userlogin", {
          email,
          password,
        })
        .then((data) => {
          const { token, name } = data.data;

          Cookies.set("accessToken", token);
          //   Cookies.set("role", role);
          Cookies.set("name", name);
          console.log(data);

          if (data.status === 400 || data.status === 401) {
            console.log("invalid email or password");
          } else if (data.status === 404) {
            console.log("user not found!");
          } else if (data.status === 200 && Cookies.get("accessToken")) {
            console.log("Login Successfully");
            setTimeout(() => {
              navigate("/");
            }, 0);
          }
        });
    }
    console.log(a);
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Main>
        <AppName>Lubick</AppName>
        <AppSlogan>Interactive shopping </AppSlogan>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        {/* <FormCont onSubmit={HandleSignIn}> */}
        <FormCont>
          <FormHead>Login</FormHead>
          <FormBody>
            <FormInputDiv>
              <HiOutlineMail style={SvgStyle} />
              <FormInput
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                Required
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                Required
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
          </FormBody>
          <FormButton type="submit" onClick={userLogin}>
            Sign Indsd
          </FormButton>
          {/* <FormParaStatus>{statusMsg}</FormParaStatus> */}
          <FormParaStatus></FormParaStatus>

          <ForgotPassword>Forgot Password?</ForgotPassword>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <CreateAccount> Create a new account</CreateAccount>
          </Link>

          <SocialLoginDiv style={{ backgroundColor: "#2A61FF" }}>
            {" "}
            <RiFacebookFill style={SvgSocialLogo} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <SocialLoginNames>SignIn with facebook</SocialLoginNames>
            </Link>
          </SocialLoginDiv>

          <SocialLoginDiv style={{ backgroundColor: "#00E7FF" }}>
            {" "}
            <RiTwitterFill style={SvgSocialLogo} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <SocialLoginNames>SignIn with twitter</SocialLoginNames>
            </Link>
          </SocialLoginDiv>

          <SocialLoginDiv
            style={{ backgroundColor: "#FF2A2A" }}  onClick={google }>
              
            <IoLogoGoogleplus style={SvgSocialLogo}  />
            <Link to="/" style={{ textDecoration: "none" }}>
              <SocialLoginNames >SignIn with google</SocialLoginNames>
            </Link>
          </SocialLoginDiv>
        </FormCont>
        <GuestCont>
          <GuestLoginDiv
            style={{
              width: "10%",
              height: "3vh",
              marginBottom: "30px",
              backgroundColor: "#00E7FF",
            }}
          >
            {" "}
            <GuestLoginNames>Continue as a guest</GuestLoginNames>
          </GuestLoginDiv>
        </GuestCont>
      </Main>
    </>
  );
};

export default SignIn;
