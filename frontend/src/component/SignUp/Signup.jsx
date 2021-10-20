import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
export default function Signup() {
  const [users, userData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
    err: "",
  });
  const setvalue = (e) => {
    const { name, value } = e.target;
    userData({ ...users, [name]: value });
  };
  const sendData = async () => {
    const { fullname, email, mobile, password, cpassword } = users;
    if (!fullname || !email || !mobile || !password || !cpassword) {
      let isEmpty;
      if (!fullname) isEmpty = "fullname";
      else if (!email) isEmpty = "email";
      else if (!mobile) isEmpty = "mobile";
      else if (!password) isEmpty = "passwor";
      else isEmpty = "cpassword";
      userData({ ...users, err: `*fill the ${isEmpty}*` });
    } else if (password !== cpassword) {
      userData({ ...users, err: `* pasword is not matched*` });
    } else {
      const data = await axios.post(
        "http://localhost:4001/signup",
        users,
        async (req, res) => {}
      );
      alert(data.data.msg);
      userData({
        fullname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
        err: "",
      });
    }
  };
  return (
    <div className="mainDiv">
      <div className="signUpDiv">
        <div className="header">
          <h1>Sign Up</h1>
        </div>
        <div className="content">
          {/* <label>Full Name:</label> */}
          <input
            type="text"
            onChange={setvalue}
            value={users.fullname}
            name="fullname"
            placeholder="Full Name"
            autoComplete="false"
          />
          <input
            type="email"
            onChange={setvalue}
            value={users.email}
            name="email"
            placeholder="Email"
          />
          <input
            type="mobile"
            onChange={setvalue}
            value={users.mobile}
            name="mobile"
            placeholder="Mobile"
          />
          <input
            type="password"
            onChange={setvalue}
            value={users.password}
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            onChange={setvalue}
            value={users.cpassword}
            name="cpassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="already">
          <h1>
            Already a Member?{" "}
            <span>
              <a href="/">
                <b>Log In</b>
              </a>
            </span>
          </h1>
        </div>
        <div className="button">
          <button type="submit" onClick={sendData}>
            Sign Up
          </button>
        </div>

        <div className="errdiv">
          {" "}
          <span className="err">{users.err}</span>{" "}
        </div>
      </div>
    </div>
  );
}
