import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('/api/events');
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <h3>{event.name}</h3>
                    <button>View Details</button>
                </div>
            ))}
        </div>
    );
};

export default EventList;
