import React from "react";
import Card from "./CardItem";
import './Cards.css'

function Cards(){
    return(
        <div className="cards">
            <h1>Check out interesting stuff</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <Card 
                    photo="images/Fire_Lizard.jpg"
                    description = "See the fire lizard! lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    name = 'Fire Lizard'
                    date = '23ti Avgust'
                    location = 'ul. Vasil Petleshkov 21'
                    link = 'https://www.google.com/'
                    />
                    <Card 
                    photo="images/synthwave-purple-city-ec-1920x1080.jpg"
                    description = "See the fire lizard! lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    name = 'Fire Lizard'
                    date = '23ti Avgust'
                    location = 'ul. Vasil Petleshkov 21'
                    link = 'https://www.google.com/'
                    />
                </div>
            </div>
        </div>
    )
}

export default Cards

