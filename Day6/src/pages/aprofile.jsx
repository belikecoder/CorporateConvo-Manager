import React, { useState } from 'react';
import '../assets/css/profile.css'
import ASide from '../components/side';
import Sideb from '../components/usersidebar';
const AProfile = () => {
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
    <ASide/>
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

      
    </div>
    </>
  );
};

export default AProfile;
