import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Lensdata from '../Data/Lensdata'; // Correct import for default export
import Sidenav from './Sidenav'; // Ensure correct import path for Sidenav

function Lens() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav /> {/* Sidebar component */}
        </Col>
        <Col sm={10}>
          <div className="lala2">
            {Lensdata.map((e) => (
              <div key={e.id} className="lens-item">
                <Link to={`/lens/${e.id}`}> {/* Link to the lens detail page */}
                  <img
                    src={e.image} // Use the correct image URL
                    alt={e.name} 
                    style={{ width: '200px' }} 
                  />
                  <p>{e.name}</p>
                  <p>{e.brand}</p>
                  <h5>Price: {e.price}</h5>
                </Link>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Lens;
