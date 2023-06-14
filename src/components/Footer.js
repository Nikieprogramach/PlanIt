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
                        <a href='https://docs.google.com/document/d/17dSrMscUVxfHInJeMXnCCa7kSOfHcMLVDgmWYKGkyYk/edit' className = "info-links" target="_blank">How it works</a>
                        <a href='https://www.tiktok.com/@daniel.dimitrov.2021?is_from_webapp=1&sender_device=pc' className = "info-links" target="_blank">Investors</a>
                        <a href='https://policies.google.com/terms?hl=en-US' className = "info-links" target="_blank">Terms of services</a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Footer