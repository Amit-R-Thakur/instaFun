import React from 'react'
import Header from '../header/Header'
import "./login.css"
import { AiOutlineMail ,AiOutlineLock} from 'react-icons/ai'
export default function Login() {
    return (
        <>
            <Header/>
            <div className="loginMain">
                <div className="login">
                    <div className="loginHeader">
                        <h1>Login</h1>

                    </div>
                    <div className="loginContent">
                        <div className="emaiContainer">
                            <AiOutlineMail className="MailIcon"/><div className="emailHandler"><input placeholder="Enter Your Email!" type="email" name="email" className="email"/></div>

                        </div>
                        <div className="emaiContainer">
                            <AiOutlineLock className="MailIcon"/><div className="emailHandler"><input placeholder="Enter Your Password!" type="password" name="password" className="email"/></div>

                        </div>

                    </div>
                    <div className="loginButton">
                    <button className="loginbtn">Login</button>
                    </div>
                    <div className="forgetandSignUp">
                        <a href="/">don't have an account?</a>
                        <a href="/">forget password?</a>

                    </div>
                  


                </div>

            </div>
            
        </>
    )
}
