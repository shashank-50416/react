import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Videocameradata from '../Data/Videocameradata';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

function Videocamera() {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className='lala2'>
            {
              Videocameradata.map((e) => (
                <div key={e.id}>
                  <Link to={`/videocamera/${e.id}`}>
                    <img src={e.image} alt={e.name} style={{ width: '100%' }} />
                    <p>{e.name}</p>
                    <p>{e.brand}</p>
                    <h5>Price: {e.price}</h5>
                  </Link>
                </div>
              ))
            }
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Videocamera;
