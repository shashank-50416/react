import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'; // Icons for cart and user profile

function Topbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="topbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">ShopEase</span>
        </Navbar.Brand>
        
        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/camera" className="nav-link">Cameras</Nav.Link>
            <Nav.Link as={Link} to="/digital" className="nav-link">Digital</Nav.Link>
            <Nav.Link as={Link} to="/lens" className="nav-link">Lenses</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex search-bar">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* Icons for Cart and User Profile */}
          <Nav>
            <Nav.Link as={Link} to="/cart" className="nav-icon">
              <FaShoppingCart size={24} />
              <span className="cart-count">3</span> {/* Example cart item count */}
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-icon">
              <FaUserAlt size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;


