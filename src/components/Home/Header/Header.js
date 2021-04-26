import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeaderImage from '../../../images/header.png';

const Header = () => {
    return (
        <Container className="header mt-3">
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="header-content">
                        <h1>
                            Good <span className="active-color">Food</span> &
                            Test for Daily Life
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat perspiciatis vero nesciunt, quaerat
                            repellat optio iste.
                        </p>
                        <Button className="custom-btn">Get Started</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={HeaderImage} alt="Header img" />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
