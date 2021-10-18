import React from 'react'
import "./signup.css"
export default function Signup() {
    return (
        <div className="mainDiv">
            <form autoComplete="off" method="post" action="#">
            <div className="signUpDiv">
                <div className="header"><h1>Sign Up</h1></div>
                <div className="content">
                    {/* <label>Full Name:</label> */}
                    <input type="text" name="fullname" placeholder="Full Name" autoComplete="false"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="mobile" name="mobile" placeholder="Mobile"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="cpassword" placeholder="Confirm Password"/>
                </div>
                <div className="already">
                    <h1>Already a Member? <span><a href="#"><b>Log In</b></a></span></h1>
                </div>
                <div className="button">
                    <button>Sign Up</button>
                </div>
                <div className="errdiv">
                    <span className="err"></span>
                </div>
                

            </div>
            </form>
            
        </div>
    )
}
