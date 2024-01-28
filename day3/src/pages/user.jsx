import React from 'react';
import '../assets/css/user.css'
import  './profile';
import '../shared/currentbookedevent'
import '../shared/oldbookedevent'
import '../shared/history'
import { Outlet, Link } from "react-router-dom";

import { useState } from 'react';
import Events from '../components/events';
function User() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="sidebar-container">
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : ' ☰'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-item"><i class="fa fa-user" aria-hidden="true"></i> <Link to="/profile" className="ght">Profile</Link></div>
        <div className="sidebar-item"> <i class="fa fa-calendar" aria-hidden="true"></i><Link to="/oldbookedevent" className="ght">Old Events</Link></div>
        <div className="sidebar-item"> <i class="fa fa-calendar" aria-hidden="true"></i><Link to="/currentbookedevent" className="ght">New Events</Link></div>
        <div className="sidebar-item"><i class="fa fa-history" aria-hidden="true"></i><Link to="/history" className="ght">History</Link></div>
      </div>
      <h1 className="cul">d dvudv udcudc jodcuo</h1>
    </div>
    <div>
      <Events/>
    </div>
    </>
  );
};

export default User;