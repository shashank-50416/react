import React from 'react';
import { Row, Col } from 'react-bootstrap';
  // Correct import based on your folder structure
import Sidenav from '../Modules/Sidenav';  // Correct import based on your folder structure
import Topbar from '../Topbar'; // Correct import based on your folder structure
import { useParams } from 'react-router-dom';
import Digitaldata from '../Data/Digitaldata';
function DigitalDetails() {
  let { id } = useParams();  // Get the id from the URL
  let productdet = Digitaldata.find((item) => item.id === parseInt(id));  // Find the product based on the id
  
  if (!productdet) {
    return <p>Product not found</p>;  // Handle the case where the product doesn't exist
  }

  return (
    <div>
      <Row>
        <Col md={2}>
          <Sidenav />  {/* Sidebar */}
        </Col>
        <Col md={10}>
          <Topbar />  {/* Topbar */}
          <div className="container">
            <div className="da">
              <img src={productdet.image} alt={productdet.name} style={{ width: '300px' }} />
            </div>
            <div className="data">
              <p>Brand: {productdet.brand}</p>
              <p>Price: {productdet.price}</p>
              <p>Lens: {productdet.Opticalzoom}</p> {/* You may want to display Optical Zoom instead of lens */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DigitalDetails;
