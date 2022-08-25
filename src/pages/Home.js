import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { Landing } from '../components/landing/Landing';
import { Footer } from '../components/footer/Footer';

export const Home = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <Footer />
        </>
    );
}