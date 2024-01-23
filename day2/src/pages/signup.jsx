// AuthContainer.js
import React, { useState } from 'react';
import '../assets/css/signup.css';

const AuthContainer = () => {
  const [isSignUpActive, setSignUpActive] = useState(false);

  const togglePanel = () => {
    setSignUpActive(!isSignUpActive);
  };

  return (
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="">
          <h1 style={{ paddingTop: '15px' }}> Create Account</h1>
          <input type="text" name="cname" placeholder="Company Name" />
          <input type="text" name="uname" placeholder="User Name" />
          <input type="text" name="address" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="cpassword" placeholder="Conforim Password" />
          <input type="text" name="role" placeholder="Role" />
          <button style={{ marginTop: '10px' }}> Create Account</button>
          <h5>
            Already have an account!{' '}
            <a className="ghost" onClick={togglePanel} style={{ color: 'blue', cursor: 'pointer' }}>
              <u>Sign In</u>
            </a>
          </h5>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 style={{ paddingBottom: '15px' }}> Login Now</h1>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="text" name="role" placeholder="Role" />
          <a href="#" style={{ paddingLeft: '150px', fontWeight: 'bold' }}>
            {' '}
            Forgot Your Password?
          </a>
          <button style={{ marginTop: '10px' }}> Let Me In...</button>
          <h5>
            New to here!{' '}
            <a className="ghost" onClick={togglePanel} style={{ color: 'blue', cursor: 'pointer' }}>
              <u>Sign Up</u>
            </a>
          </h5>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img
              src="https://img.freepik.com/free-vector/ecological-press-conference-member-speaking-stage-before-audience-presenting-graphs-with-earth_74855-14011.jpg?size=626&ext=jpg&ga=GA1.1.616998126.1703836020&semt=ais"
              alt="movie-1"
              height="480"
              width="500"
            />
          </div>
          <div className="overlay-panel overlay-right">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-business-party-illustration_52683-87327.jpg?size=626&ext=jpg&ga=GA1.1.616998126.1703836020&semt=ais"
              alt="movie-2"
              height="480"
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
AuthContainer.js
