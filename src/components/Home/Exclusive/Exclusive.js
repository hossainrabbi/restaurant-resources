import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { foods } from '../../../data/foods';
import FoodItem from '../../FoodItem/FoodItem';

const Exclusive = () => {
    const firstThreeFoods = foods.slice(0, 3);

    return (
        <Container className="mt-5">
            <div className="title">
                <h2>
                    Our <span className="active-color">Exclusive</span> Dish
                </h2>
            </div>
            <Row>
                {firstThreeFoods.map((food) => (
                    <Col md={4} key={food.id}>
                        <FoodItem {...food} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Exclusive;
