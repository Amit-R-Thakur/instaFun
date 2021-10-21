import React from "react";
import Header from "../header/Header";
import "./login.css";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [login, getLogin] = useState({
    email: "",
    password: "",
  });
  const setLoginData = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    getLogin({ ...login, [name]: value });
  };
  const sendLoginData = async () => {
    // console.log(login)
    await axios.post("http://localhost:4001/userLogin", login).then((res) => {
      if (res.data.login) {
        alert("Login Successfull");
        getLogin({ email: "", password: "" });
      } else {
        alert(res.data.msg);
      }
    });
  };

  return (
    <>
      <Header />
      <div className="loginMain">
        <div className="login">
          <div className="loginHeader">
            <h1>Login</h1>
          </div>
          <div className="loginContent">
            <div className="emaiContainer">
              <AiOutlineMail className="MailIcon" />
              <div className="emailHandler">
                <input
                  onChange={setLoginData}
                  value={login.email}
                  placeholder="Enter Your Email!"
                  type="email"
                  name="email"
                  className="email"
                />
              </div>
            </div>
            <div className="emaiContainer">
              <AiOutlineLock className="MailIcon" />
              <div className="emailHandler">
                <input
                  onChange={setLoginData}
                  value={login.password}
                  placeholder="Enter Your Password!"
                  type="password"
                  name="password"
                  className="email"
                />
              </div>
            </div>
          </div>
          <div className="loginButton">
            <button className="loginbtn" onClick={sendLoginData}>
              Login
            </button>
          </div>
          <div className="forgetandSignUp">
            <a href="/signup">don't have an account?</a>
            <a href="/">forget password?</a>
          </div>
        </div>
      </div>
    </>
  );
}
