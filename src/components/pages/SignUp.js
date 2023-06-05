import React from "react";
import '../../App.css'
import './SignUp.css'

export default function SignUp(){
    return(
        // <div className="sign-up-container">
        //     <h1 className="sign-up">Sign Up</h1>
        //     <form className="sign-up-form">
        //         <input type="email" name="email" placeholder="Your Email" className="email-input"/>
        //         <input type="password" name="password" placeholder="Your Password" className="password-input"/>
        //         <button className="sign-up-button">Sign Up</button>
        //     </form>
        // </div>
        <div className="sign-up-page">
            <div class="sign-up-container">
                <h2>Sign Up</h2>
                <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required/>
                </div>
                <input type="submit" value="Sign Up"/>
                </form>
            </div>
        </div>
    )   
}