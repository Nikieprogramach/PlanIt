import React from "react";
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection(){
    return(
        <div className="hero-container">
            <video src="/public/videos/Ardentia.mp4" autoPlay loop muted/>
            <h1>Adventure awaits</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='/sign-up'>
                    Get started
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' path='/create-event'>
                    Create an event <i className='far-fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection