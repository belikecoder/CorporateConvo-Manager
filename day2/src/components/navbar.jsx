import React, { useState } from 'react';
import '../assets/css/Navbar.css';
import '../pages/home';
import '../pages/about';
import '../pages/signup';
import '../pages/contact';
function NavBar() {
  return ( 
    <>
    <header>
    <div id="header-inner">
      <a href="#" id="logo"></a>
      <nav>
        <a href="#" id="menu-icon"></a>
        <ul>
          <li><a href="/" className="current">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/signup">Sign In</a></li>
          <li><a href="/contact">Contact</a></li>
         
        </ul>
      </nav>
    </div>
  </header>
    </>
   );
}

export default NavBar;
