import React from 'react'
import "./Header.css"
import {AiFillGithub,AiOutlineInstagram} from "react-icons/ai"
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div className="HeaderMain">
            <div className="Headerlogo"><AiOutlineInstagram className="HeaderInstaIcon"/><h1>InstaFun</h1></div>
            <div className="HeaderComponent">
                <ul>
                    <li><NavLink activeClassName="active_class" to="/signup">SignUp</NavLink></li>
                    <li><NavLink activeClassName="active_class" to="/login">Login</NavLink></li>
                    <li><NavLink activeClassName="active_class" to="/database">Database</NavLink></li>
                </ul>

            </div>
            <div className="HeaderSocialMedia"><a href="/"><AiFillGithub className="HeaderGitHubIcon"/></a><a href="/"><AiOutlineInstagram className="AiOutlineInstagram"/></a></div>
            
        </div>
    )
}
