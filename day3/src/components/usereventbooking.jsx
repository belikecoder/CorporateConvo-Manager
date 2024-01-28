// EventBookingForm.js

import React, { useState } from 'react';
import '../assets/css/usereventbooking.css'

const EventBooking = () => {
  const [bookingData, setBookingData] = useState({
    username: '',
    bookingDate: '',
    eventDate: '',
    description: '',
    headCount: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHeadCountChange = (e) => {
    const headCount = parseInt(e.target.value, 10) || 0;
    setBookingData((prevData) => ({
      ...prevData,
      headCount: headCount >= 0 ? headCount : 0,
    }));
  };

  const calculateAmount = () => {
    // Assuming the amount is 1000 per head
    return bookingData.headCount * 1000;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    alert('Booking submitted:', bookingData);
    // You can send the form data to your backend or perform other actions
     
  };

  return (
    <>
    <h1 className="form-title">Event Booking Form</h1>
    <div className="event-booking-form-container">
      <form onSubmit={handleSubmit} className="event-booking-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={bookingData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Booking Date:
          <input
            type="date"
            name="bookingDate"
            value={bookingData.bookingDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={bookingData.eventDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={bookingData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Head Count:
          <input
            type="number"
            name="headCount"
            value={bookingData.headCount}
            onChange={handleHeadCountChange}
          />
        </label>
        <p>Amount: Rs : {calculateAmount()}</p>
        <button  className ="bts" type="submit" >Save</button>
      </form>
    </div>
    </>
  );
};

export default EventBooking;
