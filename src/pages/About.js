import React from 'react';
import { AboutContent } from '../components/about-content/AboutContent';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';

export const About = () => {
    return (
        <>
            <Navbar/>
            <AboutContent/>
            <Footer/>
        </>
    )
}