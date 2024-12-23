import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Modules/Sidenav';
import Lensdata from '../Data/Lensdata'; // Make sure this path is correct
import Topbar from '../Topbar';

function LensDetails() {
  const { id } = useParams(); // Get the 'id' from the URL params
  const productdrt = Lensdata.find((item) => item.id === parseInt(id)); // Find the lens based on the id

  // Handle if no product is found
  if (!productdrt) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Row>
        <Col md={2}>
          <Sidenav /> {/* Sidebar component */}
        </Col>
        <Col md={10}>
        <Topbar />
                <div className="container">
                        <div className='da'>
                            <img src={productdrt.image} style={{width:"300px"}}/>

                        </div>
                        <div className="data">
                      
                      
                      <p> Brand:{productdrt.brand}</p>
                      <p> Price:{productdrt.price}</p>
                      <p> Cameralens:{productdrt. Cameralens}</p>
                      <p> Description:{productdrt. name}</p>
                  </div>
                
                </div>
        </Col>
      </Row>
    </div>
  );
}

export default LensDetails;
