import React from 'react';
import {Row,Col} from "react-bootstrap";
import products from "../products";

function HomeScreen() {
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(() => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen