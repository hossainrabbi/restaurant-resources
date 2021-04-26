import React from 'react';
import NavBar from '../../NavBar/NavBar';
import About from '../About/About';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Menu />
            <About />
        </>
    );
};

export default Home;
