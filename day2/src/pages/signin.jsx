import React from 'react';
import '../assets/css/signin.css'

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h2>Login</h2>
        <div className="input-group">
          <span className="icon">
            <ion-icon name="person"></ion-icon>
          </span>
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-group">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="sign-link">
          <p>
            Don't have an account? <a href="#" className="register-link">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
