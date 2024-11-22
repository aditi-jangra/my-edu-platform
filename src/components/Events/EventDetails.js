import React from 'react';

const EventDetails = ({ event }) => (
    <div>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <button>RSVP</button>
    </div>
);

export default EventDetails;
