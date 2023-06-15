import React, {useState, useEffect} from "react";
import './CreateEvent.css'

function CreateEvent(){

    useEffect(() => {
        if(localStorage.getItem('sessionId') == null){
             window.location.href = '/login';
        }
      }, []);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [emails, setEmails] = useState([])
    const [isPublic, setIsPublic] = useState(true)

    
    const handleCheckboxChange = () => {
        setIsPublic(!isPublic);
    };

    const createEvent = async (event) => {
        event.preventDefault();

        console.log(emails)

        const session_id = localStorage.getItem('sessionId');
        console.log(session_id)

        try {
            const response = await fetch('http://localhost:3001/create-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ session_id, name, location, description, date, imageURL, emails, isPublic }),
        }).then(response => response.json())
            .then(data => {
            console.log(data.seccess);
            if(data.seccess === 'ok'){
                window.location.href = '/home';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return(
        <div className="create-event">
            <div className="page">
                <h1 className="events-title">Create an event</h1>
                <div className="event-container">
                    <form onSubmit={createEvent}>
                        <div class="form-group">
                            <label for="name">Event name:</label>
                            <input type="name" id="name" placeholder="Enter event's name" value={name} onChange={(event) => setName(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <input type="description" id="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="date">Date:</label>
                            <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="location">Location:</label>
                            <input type="location" id="location" placeholder="Enter event's location" value={location} onChange={(event) => setLocation(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="image">Image URL:</label>
                            <input type="url" id="image" value={imageURL} onChange={(event) => setImageURL(event.target.value)} required />
                        </div>
                        <div class="form-group">
                            <label for="image">People Invited:</label>
                            <input type="email" id="email" value={emails} onChange={(event) => setEmails(event.target.value)} multiple />
                        </div>
                        <div class="form-group">
                            <label for="is-public">Is public:</label>
                            <input type="checkbox" id="checkbox" value={isPublic} onChange={(event) => handleCheckboxChange()} multiple />
                        </div>
                             <button type="submit" className="create-button">Create event</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent
