// GmailMessages.js

import React from 'react';
import '../assets/css/usermess.css'
const UMessages = () => {
  // Hardcoded default messages
  const defaultMessages = [
    {
      id: 1,
      sender: 'tnevents.com',
      content: 'Hello there! your Event is  SucessFully Booked at 2024-02-09',
    },
    {
      id: 2,
      sender: 'tnevents.com',
      content: 'Hello there! your events is SucessFully Cancelled booked at 2024-03-01',
    },
    // Add more messages as needed
  ];

  const handleReply = (sender, message) => {
    // Implement your reply logic here
    console.log(`Replying to ${sender}: ${message}`);
  };

  return (
    <div className="tr">
      <h1> Recived Messages</h1>
      {defaultMessages.map((message) => (
        <div key={message.id} className="message-container">
          <div className="sender">{message.sender}</div>
          <div className="content">{message.content}</div>
          <button onClick={() => handleReply(message.sender, message.content)}>
            Reply
          </button>
        </div>
      ))}
    </div>
  );
};

export default UMessages;
