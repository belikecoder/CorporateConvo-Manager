import React, { useState } from 'react';
import '../assets/css/profile.css'
import ASide from '../components/side';
import Sideb from '../components/usersidebar';
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
   
    companyname:"Zoho" ,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role:'adimin'
    
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Add logic to save the updated user data (e.g., send it to the server)
    setIsEditing(false);
  };

  return (
    <>
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nZD_jkqwzqnzJ3ad3uyaAIAkKb0KhvcyB5Ejf84Qqg&s"
          alt="User Profile"
          className="profile-image"
        />
      </div>
      <div className="profile-info">
      <p>
          <strong>Company Name:</strong> {user.companyname}
        </p>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>

      {isEditing ? (
        <div className="edit-form">
          {/* Add form fields for editing user profile */}
          <label>
            Company Name:
            <input
              type="text"
              name="companyname"
              value={user.companyname}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            FirstName:
            <br></br>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            LastName:
            <br></br>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Email:
            <br></br>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            role:
            <br></br>
            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleInputChange}
            />
          </label>
          {/* Add more form fields as needed */}
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
    </>
  );
};

export default Profile;
