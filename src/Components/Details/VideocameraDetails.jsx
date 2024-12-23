import React, { createContext } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Modules/Sidenav';
import Videocameradata from '../Data/Videocameradata';
import Topbar from '../Topbar';

export const VideoCameraContext = createContext(); // Changed the name to avoid conflict with useContext

function VideocameraDetails() {
  const { id } = useParams();
  const productdet = Videocameradata.find((item) => item.id === parseInt(id));

  if (!productdet) {
    return <p>Product not found</p>;
  }

  return (
    <div>
        <Row>
            <Col md={2}>
                <Sidenav></Sidenav>
            </Col>
            <Col md={10}>
                <Topbar />
                <div className="container">
                        <div className='da'>
                            <img src={productdet.image} style={{width:"300px"}}/>

                        </div>
                        <div className="data">
                      
                      
                      <p> Brand:{productdet.brand}</p>
                      <p> Price:{productdet.price}</p>
                      <p> Lens:{productdet. Photosensortechnology}</p>
                      <p> Description:{productdet.name}</p>
                  </div>
                
                </div>

            </Col>
        </Row>
        </div>
  );
}

export default VideocameraDetails;
