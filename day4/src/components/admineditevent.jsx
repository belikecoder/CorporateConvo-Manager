// EditEventForm.js

import React, { useState } from 'react';

import '../assets/css/admineditevent.css'
const EditEvent= ({ event, onSave, onCancel }) => {
//   const [editedEvent, setEditedEvent] = useState({
//     id: event.id,
//     name: event.name,
//     date: event.date,
//     location: event.location,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedEvent((prevEvent) => ({
//       ...prevEvent,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     onSave(editedEvent);
//   };

//   const handleCancel = () => {
//     onCancel();
//   };

  return (
   <>
   <h1 className="he1">Edit Event</h1>
   <div className="edit-event-form-container">
      <form className="edit-event-form">
        <label>
          Event Name:
          <input className="ipn"
            type="text"
            name="name"
          />
          </label>
          <label>
          Description:
          <input className="ipn"
            type="text"
          />
        </label>
        <label>
          Total package:
          <input className="ipn"
            type="text"
          />
        </label>
        <label>
         Parcipation Count
          <input className="ipn"
            type="number"
          />
        </label>
        <label>
         Charges:
          <input  className="ipn"
            type="text"
          />
        </label>
        <div className="buttons-container">
          <button type="button"  className="save-button">
            Save
          </button>
          <button type="button"  className="cancel-button">
            Cancel
          </button>
        </div>

         </form>
         </div>
   </>
  );
};

export default EditEvent;
