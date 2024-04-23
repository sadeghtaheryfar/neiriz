import React from 'react';
import { Outlet } from 'react-router-dom';
import './../css/style.css?v=0.01';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HideMenu from '../components/HideMenu';

const HomeLeyout = () => {
    return (
        <>
            <HideMenu />
            
            <Header />

            <Outlet />

            <Footer />
        </>
    );
};

export default HomeLeyout;