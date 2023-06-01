import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards(){
    return(
        <div className="cards">
            <h1>Check interesting stuff</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Fire_Lizard.jpg"
                        text = "See the fire lizard!"
                        label = 'Adventure'
                        path = '/events'
                        />
                        <CardItem 
                        src="images/synthwave-purple-city-ec-1920x1080.jpg"
                        text = "See the beautifull views!"
                        label = 'Explore'
                        path = '/events'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards