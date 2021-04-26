import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Chef from '../../../images/chef.png';
import './Chefs.css';

const Chefs = () => {
    return (
        <Container className="chefs mt-5 pt-3 px-0" fluid>
            <Row className="align-items-center">
                <Col md={2} />
                <Col md={5}>
                    <div className="header-content">
                        <div className="title text-left mb-0">
                            <h2>
                                Meet Our{' '}
                                <span className="active-color">Chefs</span>
                            </h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Doloremque, nam. Nobis, fuga modi autem
                            nesciunt, placeat molestiae accusamus eos quasi
                            laudantium dolorem quod veritatis? In consequuntur
                            dolore eius dolores reiciendis, doloremque
                            architecto nobis ratione temporibus voluptas ipsa
                            voluptate mollitia eligendi nesciunt ab
                        </p>
                        <Button className="custom-btn">Get Started</Button>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="about-img">
                        <img src={Chef} alt="Chef" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Chefs;
