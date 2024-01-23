import React from 'react';
import '../assets/css/contact.css'

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" />
              <input type="email" name="email" placeholder="Enter Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit" className="btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1c3RvbWVyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
