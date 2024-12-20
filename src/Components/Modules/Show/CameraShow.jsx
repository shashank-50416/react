import React from 'react';
import { Cameradata } from '../../Data/Cameradata';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../Sidenav';
import Head from '../../Head';

function CameraDisplay() {
    const { id } = useParams(); // Get the dynamic id from the URL
    console.log('Received ID:', id);  // Log to check the id

    // Ensure the 'id' is treated as a string or number depending on your data
    const ProductDisplay = Cameradata.find((item) => item.id.toString() === id);

    // Handle the case when the product is not found
    if (!ProductDisplay) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="container-fluid p-5">
            <Row>
                <Col sm={2}>
                    <Sidenav />
                </Col>
                <Col sm={10}>
                    <Head />
                </Col>
            </Row>

            <div className="container-fluid d-flex justify-content-around align-items-center flex-wrap">
                <div style={{ width: '50%' }}>
                    <img
                        src={ProductDisplay.Image} // Make sure the image path is correct
                        alt={ProductDisplay.name}
                        style={{ width: '400px', height: 'auto' }} // Image scaling
                    />
                </div>
                <div style={{ width: '50%' }}>
                    <h3>{ProductDisplay.name}</h3>
                    <p>{ProductDisplay.description}</p>
                    <h5>Price: {ProductDisplay.price}</h5>
                </div>
            </div>
        </div>
    );
}

export default CameraDisplay;
