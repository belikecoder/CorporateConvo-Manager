// AuthContainer.js
import React, { useState } from 'react';
import '../assets/css/signup.css';

const Signup = () => {
  const [isSignUpActive, setSignUpActive] = useState(false);
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [roleSignUp, setRoleSignUp] = useState('');

  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const togglePanel = () => {
    setSignUpActive(!isSignUpActive);
  };

  const validateEmail = (email) => {
    // You can use a more robust email validation regex, this is a simple one
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters, with one capital letter, one digit, and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateRole = (role) => {
    // Roles can only be 'admin' or 'user'
    return role.toLowerCase() === 'admin' || role.toLowerCase() === 'user';
  };

  const handleSignUp = () => {
    if (!validateEmail(emailSignUp) || !validatePassword(passwordSignUp) || !validateRole(roleSignUp)) {
      alert('Invalid input. Please check your email, password, and role.');
      return;
    }

    // Placeholder logic for sign-up, replace with your actual sign-up logic
    alert(`Sign Up successful!\nEmail: ${emailSignUp}\nPassword: ${passwordSignUp}\nRole: ${roleSignUp}`);
  };

  const handleSignIn = () => {
    if (!validateEmail(emailSignIn) || !validatePassword(passwordSignIn)) {
      alert('Invalid input. Please check your email and password.');
      return;
    }

    // Placeholder logic for sign-in, replace with your actual sign-in logic
    alert(`Sign In successful!\nEmail: ${emailSignIn}\nPassword: ${passwordSignIn}`);
  };

  return (
    <>
    <div className="ove">
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form>
          <h1 style={{ paddingTop: '15px' }}>Create Account</h1>
          <input
            type="text"
            name="cname"
            placeholder="CompanyName"
            required="required"
          />
          <input
            type="text"
            name="uname"
            placeholder="UserName"
            required="required"
          />
          <input
            type="text"
            name="address"
            placeholder="Email"
            value={emailSignUp}
            onChange={(e) => setEmailSignUp(e.target.value)}
            required="required"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={passwordSignUp}
            onChange={(e) => setPasswordSignUp(e.target.value)}
            required="required"
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            required="required"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={roleSignUp}
            onChange={(e) => setRoleSignUp(e.target.value)}
            required="required"
          />
          <button style={{ marginTop: '10px' }} onClick={handleSignUp}>
            Create Account
          </button>
          <h5>
            Already have an account!{' '}
            <a className="ghost" onClick={togglePanel} style={{ color: 'blue', cursor: 'pointer' }}>
              <u>Sign In</u>
            </a>
          </h5>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form>
          <h1 style={{ paddingBottom: '15px' }}>Login Now</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={emailSignIn}
            onChange={(e) => setEmailSignIn(e.target.value)}
            required="required"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={passwordSignIn}
            onChange={(e) => setPasswordSignIn(e.target.value)}
            required="required"
          />
           <input
            type="text"
            name="role"
            placeholder="Role"
            value={roleSignUp}
            onChange={(e) => setRoleSignUp(e.target.value)}
            required="required"
          />
          <a href="#" style={{ paddingLeft: '150px', fontWeight: 'bold' }}>
            {' '}
            Forgot Your Password?
          </a>
          <button style={{ marginTop: '10px' }} onClick={handleSignIn}>
            Let Me In...
          </button>
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
              src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="movie-1"
              height="480"
              width="500"
            />
          </div>
          <div className="overlay-panel overlay-right">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
              alt="movie-2"
              height="480"
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Signup;
