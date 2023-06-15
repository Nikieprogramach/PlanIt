import React from "react";
import '../../App.css'
import './Events.css'
import Cards from "../Cards";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export default function Events(){
    return(
        <div className="events">
            <div className="page-container">
                <h2 className="events-title">Your events</h2>
                <div className="event-list-container">
                    {localStorage.getItem('sessionId') != null ? 
                    <>
                        <Cards/>
                        <div className="create-event-button">
                            <Button buttonStyle='btn--outline' path='/create-event'>Create event</Button>
                        </div>
                    </>
                    :
                    <h2 className="no-logged-in-text">Log in to see and create events! <Link to='/login'>Log In</Link></h2>
                    }
                </div>
            </div>
        </div>
    )
}