import React, { useState } from 'react';
import OldEvent from '../shared/oldbookedevent';

const EventDetailsPage = () => {
  // Sample event data
  const eventData = {
    eventName: 'Board Meeting',
    eventDate: '2024-01-28',
    bookedDate: '2024-01-15',
    amountPaid: 50,
    totalMembers: 3,
    imageUrl: 'https://media.istockphoto.com/id/1498322831/photo/indian-business-people-meeting-presentation-in-office-conference-room-showing-infographics.jpg?s=612x612&w=0&k=20&c=xYxXa5HgbHlLdLJYnLYzUnCZsVkgJR2kfoP18bbCgbk=',
  };

  return (
    <>
     <div className="hrd"> 
        <h1>Old Booked Events</h1>
        </div>
    <div className="event-details-page">
      <OldEvent eventData={eventData} />
    </div>
    </>
  );
};

export default EventDetailsPage;
