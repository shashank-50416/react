import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Cameradata } from '../Data/Cameradata';
import Sidenav from './Sidenav';

function Camera() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
        <div className='lala2'>

          {
            Cameradata.map((e) => (
              <div >
                <img src={e.Image} alt={e.name} style={{ width: '' }} />
                <p>{e.name}</p>
                <p>{e.brand}</p>
                <h5> Price :{e.price}</h5>
              </div>
            ))
          }
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Camera;
