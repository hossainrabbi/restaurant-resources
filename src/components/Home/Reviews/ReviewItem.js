import React from 'react';
import { Card } from 'react-bootstrap';
import './Reviews.css';

const ReviewItem = ({ name, title, image, description }) => {
    return (
        <Card className="review-item">
            <Card.Img variant="top" src={image} />
            <Card.Header>
                <h5>{name}</h5>
                <p>{title}</p>
            </Card.Header>
            <div className="p-2">
                <Card.Body className="text-center py-2">
                    {description}
                </Card.Body>
            </div>
        </Card>
    );
};

export default ReviewItem;
