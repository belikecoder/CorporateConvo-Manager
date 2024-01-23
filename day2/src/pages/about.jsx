import React from 'react';
import '../assets/css/about.css'
import '../pages/contact';

const About = () => {
  return (
    <section>
      <div className="image">
        {/* Image here */}
      </div>

      <div className="content">
        <h2>About Us</h2>
        <span>{/* Line here */}</span>

        <h1>
        Welcome to ATfacts  Vignesh !... </h1>
        <br></br>
<p>At ATfacts, we take pride in transforming your corporate events into unforgettable experiences. With a passion for meticulous planning and a commitment to excellence, we are your trusted partner in creating seamless and impactful corporate gatherings.</p>

<h4>Who We Are</h4>
<p>Founded in 2017, we have established ourselves as a leading event management company dedicated to delivering top-notch services for corporate events of all scales. Our team of experienced professionals brings a wealth of creativity, expertise, and attention to detail to every project.</p>

<h4>Our Mission</h4>
<p>
We are on a mission to elevate your corporate events to new heights. By seamlessly blending innovation, precision, and creativity, we ensure that each event reflects your brand identity and leaves a lasting impression on your guests.
        </p>

        <ul className="links">
          <li>
            <a href="#">work</a>
          </li>

          <div className="vertical-line"></div>

          <li>
            <a href="#">service</a>
          </li>

          <div className="vertical-line"></div>

          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>

        <ul className="icons">
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-github"></i>
          </li>
          <li>
            <i className="fa fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
