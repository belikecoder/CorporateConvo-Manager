import React, { useState } from 'react';
import '../assets/css/admess.css';

const AdMess = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sanjay Kumar', email: 'sanjay@gmail.com', messages: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Roshan Vijay', email: 'roshan@gmail.com', messages: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, name: 'Vinoth', email: 'vinoth@gmail.com', messages: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, name: 'Yuvan Sankar', email: 'yuvan@gmail.com', messages: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more contacts as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const [selectedContact, setSelectedContact] = useState(null);

  const handleView = (contactId) => {
    const selected = contacts.find(contact => contact.id === contactId);
    setSelectedContact(selected);
  };

  const closePopup = () => {
    setSelectedContact(null);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dis">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Messages</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.messages}</td>
              <td>
                <button className="bte" onClick={() => handleView(contact.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedContact && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> {selectedContact.name}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Messages:</strong> {selectedContact.messages}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdMess;
