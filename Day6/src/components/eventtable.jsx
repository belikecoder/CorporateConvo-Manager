import React, { useState } from 'react';
import '../assets/css/eventtable.css';

const EventTable = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'John Doe', eventName: 'Conference', bookingDate: '2024-01-30', eventDate: '2024-02-15', headCount: 10, amount: 200, status: 'Booked' },
    { id: 2, name: 'Jane Doe', eventName: 'Product Launch', bookingDate: '2024-01-25', eventDate: '2024-02-19', headCount: 50, amount: 1000, status: 'Booked' },
    // Add more events as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleCancel = (eventId) => {
    // Update the status to 'Cancelled' or remove the event from the list
    const updatedEvents = events.map(event => (event.id === eventId ? { ...event, status: 'Cancelled' } : event));
    setEvents(updatedEvents);
  };

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dis">
      <input
        type="text"
        placeholder="Search by event name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {/* Remove the 'Name' column */}
            <th>Event Name</th>
            <th>Booking Date</th>
            <th>Event Date</th>
            <th>Head Count</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map(event => (
            <tr key={event.id}>
              {/* Remove the 'Name' column */}
              <td>{event.eventName}</td>
              <td>{event.bookingDate}</td>
              <td>{event.eventDate}</td>
              <td>{event.headCount}</td>
              <td>{event.amount}</td>
              <td>{event.status}</td>
              <td>
                {event.status === 'Booked' && (
                  <button className="bte" onClick={() => handleCancel(event.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
