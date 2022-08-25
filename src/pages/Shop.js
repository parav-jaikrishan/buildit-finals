import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { ShopContent } from '../components/shop-content/ShopContent';
import { Footer } from '../components/footer/Footer';

export const Shop = () => {
    return (
        <>
            <Navbar/>
            <ShopContent/>
            <Footer/>
        </>
    );
}