import React from 'react';
import '../assets/css/contact.css'

const Contact = () => {
  return (
   <>
   
   <section className="contac">
    <div className="conten">
      <h2>Contact Us</h2>
      <p>Thank you for your interest in [Your Company/Organization Name]. 
        We value your feedback and inquiries. Please feel 
        free to reach out to us using the following contact 
        information</p>
    </div>
<div className="cont">
  <div className='contInfo'>
    <div className="box">
      <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
      <div className="tex">
        <h3>Address</h3>
        <p>123 Celebration Street<br></br>Cityville, <br></br>EventlandEVT 1234<br></br>India</p>
      </div>
      </div>  
    <div className="box">
      <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
      <div className="tex">
        <h3>Phone</h3>
        <p>507-475-6094</p>
      </div>
      </div>  
    <div className="box">
      <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
      <div className="tex">
        <h3>Email</h3>
        <p>eventland@eve.com</p>
      </div>
      </div>  
  </div>
  <div className="contactform">
    <form>
      <h2>Send Message</h2>
      <div className="inputBox">
        <input type="text" name=""required="required"/>
        <span>Full Name</span>
      </div>
      <div className="inputBox">
        <input type="text" name=""required="required"/>
        <span>Email</span>
      </div>
      <div className="inputBox">
        <textarea required="required"/>
        <span>Type your message..</span>
      </div>
      <div className="inputBox">
        <input type="submit" name="" value="Send"/>
       
      </div>
    </form>
  </div>
</div>
   </section>
   </>
  );
};

export default Contact;
