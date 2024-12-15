import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';


function Login() {
  return (
    <div className="login-container">
      <Row className="login-row">
        {/* Left Side - Full-Height Image with subtle animation */}
        <Col sm={6} className="login-image-column">
          <div className="login-image-content">
            <h1 className="login-heading">Your Journey Starts Here</h1>
            <p className="login-subheading">Capture the moments that matter the most</p>
          </div>
        </Col>

        {/* Right Side - Login Form */}
        <Col sm={6} className="login-form-column">
          <div className="login-form-wrapper">
            <h3 className="login-form-title">Welcome Back</h3>
            <form className="login-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username or Email"
                  className="form-control login-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control login-input"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 login-submit-button">
                Login
              </button>
              <div className="login-footer">
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot Password?
                </Link>
                <p className="sign-up-prompt">
                  Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
