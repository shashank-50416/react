import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Digitaldata from '../Data/Digitaldata';  // Ensure this path is correct
import Sidenav from './Sidenav';  // Ensure this path is correct
import { Link } from 'react-router-dom';

function Digital() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav /> {/* Sidebar */}
        </Col>
        <Col sm={10}>
          <div className="lala2">
            {Digitaldata.map((e) => (
              <div key={e.id} className="digital-item">
                <Link to={`/digital/${e.id}`}>
                  <img src={e.image} alt={e.name} style={{ width: '200px' }} />
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

export default Digital;
