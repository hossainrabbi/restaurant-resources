import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { menu } from '../../../data/menu';
import ManuItem from './ManuItem';
import './Manu.css';

const Menu = () => {
    return (
        <Container className="mt-5">
            <div className="title">
                <h2>
                    Our <span className="active-color"> Menu</span>
                </h2>
            </div>
            <Row>
                {menu.map((item) => (
                    <Col md={2} key={item.id}>
                        <ManuItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;
