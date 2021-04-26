import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar className="nav-bar" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">
                    React
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink
                            activeClassName="selected"
                            className="nav-link"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
