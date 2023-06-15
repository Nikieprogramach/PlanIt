import React, {useEffect, useState} from "react";
import Card from "./CardItem";
import './Cards.css'

function Cards(){

    const [eventArray, setEventArray] = useState([])

    useEffect(() => {
        if(localStorage.getItem('sessionId') != null){
            handlePageLoad();
        }
      }, []);

      const handlePageLoad = async () => {
  
        const session_id = localStorage.getItem('sessionId');

        console.log(session_id)

        try {
          const response = await fetch('http://localhost:3001/load-events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({session_id }),
          }).then(response => response.json())
          .then(data => {
          console.log(data);
          setEventArray(data)
        })
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };  

    return(
        <div className="cards">
            <h1>Check out interesting stuff</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    {eventArray.map((item) => (
                        <Card 
                        description = {item.description}
                        name = {item.name}
                        date = {item.date}
                        location = {item.location}
                        link = 'https://www.google.com/'
                        photo = {item.image}
                        />
                    ))}
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

