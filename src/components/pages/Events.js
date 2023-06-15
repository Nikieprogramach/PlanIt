import React from "react";
import '../../App.css'
import './Events.css'
import Cards from "../Cards";

export default function Events(){
    return(
        <div className="events">
            <div className="page">
                <h1 className="events-title">Events</h1>
                <div className="event-list-container">
                    <Cards/>
                </div>
            </div>
        </div>
    )
}