import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { lensdata } from '../Data/Lensdata'; 
import Sidenav from './Sidenav';

function Lens() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className="lala2">
            {lensdata.map((e) => (
              <div key={e.id}>
                <img 
                  src={e.image} // Use the correct property name
                  alt={e.name} 
                  style={{ width: '200px' }} 
                />
                <p>{e.name}</p>
                <p>{e.brand}</p>
                <h5>Price: {e.price}</h5>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Lens;
