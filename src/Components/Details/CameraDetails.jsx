import React from 'react'
import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { Cameradata } from '../Data/Cameradata'
import Sidenav from '../Modules/Sidenav'
import Topbar from '../Topbar'
import { Col, Row } from 'react-bootstrap'


export const useContext = createContext()
function CameraDetails() {
    let { id } =useParams()
    let productdat = Cameradata.find((item) => item.id === parseInt(id))
  
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
                            <img src={productdat.Image} style={{width:"300px"}}/>

                        </div>
                        <div className="data">
                      
                      
                      <p> Brand:{productdat.brand}</p>
                      <p> Price:{productdat.price}</p>
                      <p> Lens:{productdat.lens}</p>
                  </div>
                
                </div>

            </Col>
        </Row>
        </div>
  )
}

export default CameraDetails