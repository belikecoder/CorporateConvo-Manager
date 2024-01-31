import React, { useState } from 'react';
import '../assets/css/adeventtable.css';

const EventTab = () => {
  const [events, setEvents] = useState([
    { id: 1, eventName: 'Conference', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', totalPackages: 5, participationCount: 50, charges: 500 },
    { id: 2, eventName: 'Product Launch', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', totalPackages: 10, participationCount: 100, charges: 1000 },
    // Add more events as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleView = (eventId) => {
    const selected = events.find(event => event.id === eventId);
    setSelectedEvent(selected);
  };

  const handleEdit = () => {
    // Add your edit logic here
    console.log('Edit button clicked');
  };

  const closePopup = () => {
    setSelectedEvent(null);
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
            <th>Event Name</th>
            <th>Description</th>
            <th>Total Packages</th>
            <th>Participation Count</th>
            <th>Charges</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map(event => (
            <tr key={event.id}>
              <td>{event.eventName}</td>
              <td>{event.description}</td>
              <td>{event.totalPackages}</td>
              <td>{event.participationCount}</td>
              <td>{event.charges}</td>
              <td>
                <button className="bte" onClick={() => handleView(event.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEvent && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>Event Details</h2>
            <p><strong>Event Name:</strong> {selectedEvent.eventName}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Total Packages:</strong> {selectedEvent.totalPackages}</p>
            <p><strong>Participation Count:</strong> {selectedEvent.participationCount}</p>
            <p><strong>Charges:</strong> {selectedEvent.charges}</p>
            <button className="bte" onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTab;