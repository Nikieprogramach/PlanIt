import React, {useState} from "react";

function CreateEvent(){

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const createEvent = async (event) => {
        event.preventDefault();
      
        console.log(name, location, description, date);

        const session_id = localStorage.getItem('sessionId');

        try {
            const response = await fetch('http://localhost:3001/create-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session_id, name, location, description, date }),
        });
  
        if (response.ok) {
            console.log('Form submitted successfully!');
            console.log(response);
        } else {
            console.error('Form submission failed.');
        }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return(
        <div className="create-event">
            <div className="page">
                <h1 className="events-title">Create an event</h1>
                <div className="event-list-container">
                    <form onSubmit={createEvent}>
                        <div class="form-group">
                            <label for="name">Event name:</label>
                            <input type="name" id="name" placeholder="Enter event's name" value={name} onChange={(event) => setName(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="location">Location:</label>
                            <input type="location" id="location" placeholder="Enter event's location" value={location} onChange={(event) => setLocation(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <input type="description" id="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <label for="date">Date:</label>
                            <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} required/>
                        </div>
                        <button type="submit">Create event</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent