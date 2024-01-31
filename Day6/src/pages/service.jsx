// ServicesSection.js

import React from 'react';
import '../assets/css/service.css'; 
import '@fortawesome/fontawesome-free/css/all.css';


const Service = () => {
  return (
    <div className="services-section">
      <div className="inner-width">
        <h1 className="section-title">Our Services</h1>
        <div className="border"></div>
        <div className="services-container">
          {/* Web Designs */}
          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <div className="service-title">Event Planning and Strategy</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
            <i class="fa fa-ticket" aria-hidden="true"></i>
            </div>
            <div class="service-title">Registration and Ticketing</div>
            <div class="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            </div>
            <div class="service-title">Virtual Event Platforms</div>
            <div class="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
            <i class="fa fa-thumb-tack" aria-hidden="true"></i>
            </div>
            <div class="service-title">Event Marketing</div>
            <div class="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
            <i class="fa fa-calendar" aria-hidden="true"></i> 
            </div>
            <div class="service-title">Venue Selection and Logistics</div>
            <div class="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
            <i class="fa fa-commenting" aria-hidden="true"></i>
            </div>
            <div class="service-title">Post-Event Surveys and Feedback</div>
            <div class="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
