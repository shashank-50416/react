import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend)
    console.log({ name, email, password });
    // Navigate to another page after successful signup
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="signup-container">
      <Row className="signup-row">
        {/* Left Side - Visuals */}
        <Col sm={6} className="signup-left">
          <div className="signup-quote">
            <h1>“Capture Moments That Matter”</h1>
            <p>Photography is the story I fail to put into words.</p>
          </div>
        </Col>

        {/* Right Side - Signup Form */}
        <Col sm={6} className="signup-right">
          <div className="signup-form-wrapper">
            <h3 className="signup-title">Create Your Account</h3>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="form-control signup-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="form-control signup-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Create password"
                  className="form-control signup-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary signup-button">
                Sign Up
              </button>
            </form>
            <p className="signup-footer">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
