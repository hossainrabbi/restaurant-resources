import React from 'react';
import NavBar from '../../NavBar/NavBar';
import About from '../About/About';
import Chefs from '../Chefs/Chefs';
import Exclusive from '../Exclusive/Exclusive';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Menu />
            <About />
            <Exclusive />
            <Chefs />
            <Reviews />
        </>
    );
};

export default Home;
