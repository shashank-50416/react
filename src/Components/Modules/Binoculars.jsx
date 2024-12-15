import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Binocularsdata } from '../Data/Binocularsdata';
import Sidenav from './Sidenav';

function Binoculars() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
        <div className='lala'>

          {
            Binocularsdata.map((e) => (
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

export default Binoculars;
