import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; // Import CartContext
import { Cameradata } from '../Data/Cameradata';
import Sidenav from '../Modules/Sidenav';
import Topbar from '../Topbar';
import { Col, Row, Button, Modal } from 'react-bootstrap';

function CameraDetails() {
    const [cart, setCart] = useContext(CartContext); 
    const [showModal, setShowModal] = useState(false); // Modal visibility
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Payment method selection
    const [product, setProduct] = useState(null); // Product for confirmation
    let { id } = useParams();
    let productdat = Cameradata.find((item) => item.id === parseInt(id));

    // Handle "Buy Now" click
    const handleBuyNow = () => {
        setProduct(productdat); // Set the product data for confirmation modal
        setShowModal(true); // Show the modal
    };

    // Handle payment method selection (Cash on Delivery or others)
    const handlePaymentSelect = (method) => {
        setSelectedPaymentMethod(method);
    };

    // Handle adding product to cart after confirmation
    const handleConfirmBuyNow = () => {
        if (!selectedPaymentMethod) {
            alert("Please select a payment method before confirming the purchase.");
            return;
        }
        setCart([...cart, productdat]); // Add to cart
        setShowModal(false); // Close the modal
        alert(`Order placed! Payment method: ${selectedPaymentMethod}`);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false); // Close the modal without confirming
    };

    if (!productdat) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <Row>
                <Col md={2}>
                    <Sidenav />
                </Col>
                <Col md={10}>
                    <Topbar />
                    <div className="container">
                        <div className="da">
                            <img src={productdat.Image} style={{ width: "300px" }} alt="Product" />
                        </div>
                        <div className="data">
                            <p>Brand: {productdat.brand}</p>
                            <p>Price: {productdat.price}</p>
                            <p>Lens: {productdat.lens}</p>
                        </div>
                        
                        {/* Buy Now Button */}
                        <Button
                            variant="primary"
                            style={{
                                marginTop: "20px",
                                backgroundColor: "#ff6f61", 
                                borderColor: "#ff6f61", 
                                padding: "12px 24px",
                                fontSize: "18px",
                                transition: "all 0.3s ease",
                                borderRadius: "8px"
                            }}
                            onClick={handleBuyNow}
                            className="buy-now-button"
                        >
                            Buy Now
                        </Button>

                        {/* Confirmation Modal */}
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm Your Order</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>{product?.name}</h5>
                                <p><strong>Brand:</strong> {product?.brand}</p>
                                <p><strong>Price:</strong> {product?.price}</p>
                                <p><strong>Lens:</strong> {product?.lens}</p>

                                <div>
                                    <h6>Select Payment Method</h6>
                                    <Button 
                                        variant={selectedPaymentMethod === "Cash on Delivery" ? "success" : "outline-success"}
                                        onClick={() => handlePaymentSelect("Cash on Delivery")}
                                        style={{ marginRight: "10px" }}
                                    >
                                        Cash on Delivery
                                    </Button>
                                    <Button 
                                        variant={selectedPaymentMethod === "Credit Card" ? "success" : "outline-success"}
                                        onClick={() => handlePaymentSelect("Credit Card")}
                                        style={{ marginRight: "10px" }}
                                    >
                                        Credit Card
                                    </Button>
                                    <Button 
                                        variant={selectedPaymentMethod === "PayPal" ? "success" : "outline-success"}
                                        onClick={() => handlePaymentSelect("PayPal")}
                                    >
                                        PayPal
                                    </Button>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModal}>
                                    Cancel
                                </Button>
                                <Button variant="primary" onClick={handleConfirmBuyNow}>
                                    Confirm Purchase
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CameraDetails;
