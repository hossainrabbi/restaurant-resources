import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { reviews } from '../../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
    return (
        <Container className="mt-5">
            <div className="title">
                <h2>
                    Our <span className="active-color">Coustomers</span>{' '}
                    Feedback
                </h2>
            </div>
            <Row>
                {reviews.map((review) => (
                    <Col md={4} key={review.id}>
                        <ReviewItem {...review} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Reviews;
