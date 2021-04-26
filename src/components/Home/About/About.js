import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AboutImage from '../../../images/about.png';
import './About.css';

const About = () => {
    return (
        <Container className="about mt-5 pt-3 px-0" fluid>
            <Row className="align-items-center">
                <Col md={4}>
                    <div className="about-img">
                        <img src={AboutImage} alt="Header img" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="header-content">
                        <div className="title text-left mb-0">
                            <h2>
                                About <span className="active-color"> Us</span>
                            </h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Doloremque, nam. Nobis, fuga modi autem
                            nesciunt, placeat molestiae accusamus eos quasi
                            laudantium dolorem quod veritatis? In consequuntur
                            dolore eius dolores reiciendis, doloremque
                            architecto nobis ratione temporibus voluptas ipsa
                            voluptate mollitia eligendi nesciunt ab, assumenda
                            eaque alias excepturi ex libero a voluptatum vel at!
                            Commodi ea saepe libero dolore mollitia vitae.
                        </p>
                        <Button className="custom-btn">Get Started</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
