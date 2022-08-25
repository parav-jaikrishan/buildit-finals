import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
    // Change nav color when scrolling
    const [scrolled, setScrolled] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 90) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    window.addEventListener('scroll', changeColor);

    // Open mobile nav on hamburger click
    const [clicked, setClicked] = useState(false);
    
    const hamburgerClicked = () => {
        setClicked(!clicked);
    }

    return (    
        <>
            <nav className={ scrolled ? "mobile-navbar scrolled" : "mobile-navbar" }>
                <img src="assets/Vector_1.png" alt="Our logo"/>
                <div className={ clicked ? "links active" : "links" }>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About Us</Link>
                </div>
                <div className={ clicked ? "hamburger active" : "hamburger" } onClick={ () => hamburgerClicked() }>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            <nav className={ scrolled ? "laptop-navbar scrolled" : "laptop-navbar"}>
                <img src="assets/Vector_1.png" alt="Our logo"/>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About Us</Link>
                </div>
            </nav>
        </>
    );
}