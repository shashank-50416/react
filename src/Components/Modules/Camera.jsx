import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Cameradata } from '../Data/Cameradata';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

function Camera() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className='lala2'>
            {Cameradata.map((e) => (
              <div key={e.id}>
                <Link to={`/camera/${e.id}`}>
                  <img
                    src={e.Image} // Ensure the image path is correct
                    alt={e.name}
                    style={{ width: '200px', height: 'auto' }} // Set a width for the images
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

export default Camera;
