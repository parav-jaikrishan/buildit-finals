import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { Landing } from '../components/landing/Landing';

export const Home = () => {
    return (
        <>
            <Navbar />
            <Landing />
        </>
    );
}