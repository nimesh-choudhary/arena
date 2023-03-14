import React, { useState, useEffect } from "react";
// import mySvg from "./image.svg";
import "./Nav.css";
import logo from "./logo.png";
import avatar from "./avatar.svg";

function Nav(){
    const [show,handleShow] = useState(false);

    const transitionNavBar = () =>{
        
    }

    return (
        <div className="nav nav__black">
            <div className="nav">
                {/* <img
                    className="nav__logo"
                    src={logo}
                    alt= "Netflix logo"
                /> */}
                <h1 className="nav__logo">ARENA</h1>
                <img
                    className="nav__avatar"
                    src={avatar}
                    alt = "Avatar logo"
                />

            </div>
        </div>
    )
}

export default Nav