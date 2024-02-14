import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/usersidebar.css'
import EventTable from './eventtable';
const Sideb = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };


  return (
    <>
    
    <input type="checkbox" id="menu-toggle" />
      <div className="sidebar">
        <div className="side-header">
          <h3><span>D</span>T</h3>
        </div>

        <div className="side-content">
          <div className="profile">
            <div className="profile-img bg-img" ></div>
            <h4>VIGNESH</h4>
            <small>User</small>
          </div>

          <div className="side-menu">
            <ul>
              <li>
                <Link to="/dash" className="active">
                  <span className="las la-home"></span>
                  <small>Dashboard</small>
                </Link>
              </li>
              <li>
                <Link to ="/profile">
                  <span className="las la-user-alt"></span>
                  <small>Profile</small>
                </Link>
                </li>
                <li>
                <Link to ="/usermess">
                  <span className="las la-user-alt"></span>
                  <small>Mails</small>
                </Link>
                </li>
             <li>
                <Link to="/events">
                  <span className="las la-clipboard-list"></span>
                  <small>Events</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="event_table">
      <EventTable/>
      </div>
      <div className="main-content">
        <header>
          <div className="header-content">
            <label  className="le"htmlFor="menu-toggle">
              <span className="las la-bars"></span>
            </label>
            </div>
            </header>
            </div>
    </>
  );
};

export default Sideb;
