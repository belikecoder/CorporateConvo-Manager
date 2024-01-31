import React from 'react';
import '../assets/css/oldbookedevent.css'
const OldEvent = ({ eventData }) => {
    return (
        <>
      <div className="event-details-card">
        <img src={eventData.imageUrl} alt={eventData.eventName} />
        <h2>{eventData.eventName}</h2>
        <p>Booked Date: {eventData.bookedDate}</p>
        <p>Event Date: {eventData.eventDate}</p>
        <p>Amount Paid: ${eventData.amountPaid}</p>
        <p>Total Members: {eventData.totalMembers}</p>
      </div>
      </>
    );
  };

export default OldEvent;