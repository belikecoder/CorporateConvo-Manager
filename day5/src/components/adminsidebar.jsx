// Sidebar.js

import React, { useState } from 'react';
import '../assets/css/sidebar.css';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = () => {
    // Close the sidebar when an item is clicked
    setIsSidebarOpen(false);
  };

  const handleNavClick = (e) => {
    // Prevent the toggleSidebar event from being triggered when an item is clicked
    e.stopPropagation();
  };

  return (
    <>
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} onClick={handleItemClick}>
      <button className="toggl-button" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className="na" onClick={handleNavClick}>
        <ul>
          <li>Book Events</li>
          <li>Profile</li>
          <li>Payments</li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
