import React, { useEffect, useRef } from 'react';
import './Cards.css';

function Card(props) {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpand = () => setExpanded(!expanded);
    const ref = useRef(null);

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {expanded && <div className="overlay"></div>}
            <div ref = {ref} className={`event-box ${expanded ? 'expanded' : ''}`} style={{backgroundImage: expanded ? `url(${props.photo})` : `none`}} onClick={toggleExpand}>
            {!expanded && <div className="event-image" style={{backgroundImage: `url(${props.photo})`}}></div>}
                    {!expanded && <div className="name-box" >{props.name} </div>}
                        {expanded && (
                            <div className="event-details" >
                                <h2 className="event-name">{props.name}</h2>
                                <p className="event-description">{props.description}</p>
                                <div className="event-date-time">
                                    <span className="label">When?</span> 
                                    <span>{props.date}</span>
                                </div>
                                <div className="event-location">
                                    <span className="label">Where? <br></br></span> 
                                    <a className="location-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.location)}`}>{props.location}</a>
                                </div>
                            </div> 
                        )
                    }
            </div>
        </div>
    );
}

export default Card;