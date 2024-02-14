// EventForm.js

import React, { useState } from 'react';
import '../assets/css/adminaddevent.css';
import ASide from './side';

const AddEvent   = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    console.log('Event submitted:', { eventName, eventDate, eventLocation });
  };

  return (
    <>
    <ASide/>
    <h1 className="h1">Add Events</h1>
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <label>
          Event Name:
          <input className="ip"
            type="text"
          />
        </label>
        <label>
          Description:
          <input className="ip"
            type="text"
          />
        </label>
        <label>
          Total package:
          <input className="ip"
            type="text"
          />
        </label>
        <label>
         Parcipation Count
          <input className="ip"
            type="number"
          />
        </label>
        <label>
         Charges:
          <input  className="ip"
            type="text"
          />
        </label>
        <button className="bn" type="submit">Add Event</button>
      </form>
    </div>
    </>
  );
};

export default AddEvent;
