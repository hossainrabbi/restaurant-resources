import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './FoodItem.css';

const FoodItem = ({ name, price, image }) => {
    return (
        <Card className="food-item">
            <Card.Img variant="top" src={image} />
            <div className="p-2">
                <Card.Body className="text-center py-2">
                    <h5>{name}</h5>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">${price}</h6>
                    <Button className="custom-btn">Get Started</Button>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default FoodItem;
