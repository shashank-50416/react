// Camera.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Cameradata } from '../Data/Cameradata';  // Ensure Cameradata is imported
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
                    <div className="lala2">
                        {Cameradata.map(item => (
                            <div key={item.id}>
                                <Link to={`/camera/${item.id}`}>
                                    <img
                                        src={item.Image}
                                        alt={item.name}
                                        style={{ width: '200px', height: 'auto' }}
                                    />
                                    <p>{item.name}</p>
                                    <p>{item.brand}</p>
                                    <h5>Price: {item.price}</h5>
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
