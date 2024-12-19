import React, { useState } from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Button } from 'react-bootstrap';
import { Cameradata } from '../Data/Cameradata';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const cameraDisplay = Cameradata.slice(0, 4); // For Camera section
  const videoCameraDisplay = Cameradata.slice(4, 8); // Replace with actual Video Camera data

  return (
    <div className="spotify-dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <h2 className="brand-title">Camera World</h2>
        <ul className="sidebar-menu">
          <li
            className={activeTab === "Dashboard" ? "active" : ""}
            onClick={() => setActiveTab("Dashboard")}
          >
            <Link to={""}>Dashboard</Link>
          </li>
          <li
            className={activeTab === "Cameras" ? "active" : ""}
            onClick={() => setActiveTab("Cameras")}
          >
            <Link to={"/camera"}>Cameras</Link>
          </li>
          <li
            className={activeTab === "Lenses" ? "active" : ""}
            onClick={() => setActiveTab("Lenses")}
          >
            <Link to={"/lens"}>Lenses</Link>
          </li>
          <li
            className={activeTab === "Accessories" ? "active" : ""}
            onClick={() => setActiveTab("Accessories")}
          >
            <Link to={"/accessories"}>Accessories</Link>
          </li>
          <li
            className={activeTab === "Video Cameras" ? "active" : ""}
            onClick={() => setActiveTab("Video Cameras")}
          >
            <Link to={"/videocamera"}>Video Cameras</Link>
          </li>
          <li
            className={activeTab === "Digital Cameras" ? "active" : ""}
            onClick={() => setActiveTab("Digital Cameras")}
          >
            <Link to={"/digital"}>Digital Cameras</Link>
          </li>
          <li
            className={activeTab === "Binoculars" ? "active" : ""}
            onClick={() => setActiveTab("Binoculars")}
          >
            <Link to={"/binoculars"}>Binoculars</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <Navbar expand="lg" className="dashboard-navbar">
          <Container fluid>
            <Navbar.Brand>
              <h3 className="navbar-title">{activeTab}</h3>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="./login" className="nav-link-custom">Login</Nav.Link>
              <Nav.Link href="./signup" className="nav-link-custom">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Camera Section */}
        <Container fluid className="dashboard-content">
          <h2 className="content-title">Explore Our Camera Collection</h2>
          <Row className="camera-grid">
            {cameraDisplay.map((camera, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="camera-card">
                  <Card.Img
                    variant="top"
                    src={camera.Image}
                    alt={camera.name}
                    className="camera-image"
                  />
                  <Card.Body>
                    <Card.Title>{camera.name.slice(0, 10)}</Card.Title>
                    <Card.Text>
                      <strong>Brand:</strong> {camera.brand}
                    </Card.Text>
                    <Button variant="outline-light">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Link to={"/camera"} className="cam btn btn-outline-primary">
              View All Cameras
            </Link>
          </div>
        </Container>

        {/* Video Camera Section */}
        <Container fluid className="dashboard-content mt-5">
          <h2 className="content-title">Explore Our Video Camera Collection</h2>
          <Row className="videocamera-grid">
            {videoCameraDisplay.map((videocamera, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="videocamera-card">
                  <Card.Img
                    variant="top"
                    src={videocamera.Image}
                    alt={videocamera.name}
                    className="videocamera-image"
                  />
                  <Card.Body>
                    <Card.Title>{videocamera.name.slice(0, 10)}</Card.Title>
                    <Card.Text>
                      <strong>Brand:</strong> {videocamera.brand}
                    </Card.Text>
                    <Button variant="outline-light">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Link to={"/videocamera"} className="cam btn btn-outline-primary">
              View All Video Cameras
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
