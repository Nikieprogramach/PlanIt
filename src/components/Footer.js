import React from "react";
// import { Button } from "./Button";
import './Footer.css'
// import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <h2>About Us</h2>
                    <div className="footer-link-items"> 
                        <a href='/' className = "info-links" target="_blank">How it works</a>
                        <a href='/' className = "info-links" target="_blank">Investors</a>
                        <a href='/' className = "info-links" target="_blank">Terms of services</a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Footer