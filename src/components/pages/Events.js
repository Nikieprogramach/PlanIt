import React from "react";
import '../../App.css'
import './Events.css'
import Cards from "../Cards";
import { Button } from "../Button";

export default function Events(){
    return(
        <div className="events">
            <div className="page-container">
                <h1 className="events-title">Events</h1>
                <div className="event-list-container">
                    <Cards/>
                    <div className="create-event-button">
                        <Button buttonStyle='btn--outline' path='/create-event'>Create event</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}