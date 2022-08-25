import React from 'react';
import { Link } from 'react-router-dom';
import { LandingCard } from '../landing-card/LandingCard';
import "./Landing.scss";

export const Landing = () => {
    const cards = [
        {
            title: "What we offer?",
            content: "SuperEats provides a safe way to gain super powers (though temporary) via food items! Currently, we are providing these powers via ice-cream and smoothies. The items have been tested by experts for years and they are now being launched with minimal to no side effects.",
            src: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        },
        {
            title: "How it works?",
            content: "Each product on our website has a predetermined super power, which on consumption, is attained by the consumer. Though these powers are not permanent, they are still very effective. The effects wear off in around 30 minutes.",
            src: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        },
        {
            title: "Instant delivery",
            content: "Though our products have minimal to no side effects, we still have a 24/7 helpline number at +91-11-49115500. Anyone who has some doubts after or before consuming our product can give us a ring!",
            src: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        }
    ]
    return (
        <div className='landing'>
            <div className='landing-content'>
                <div className='text'>
                    <h1>SuperEats</h1>
                    <p>Using the child's imagination and a pinch of technology, we have created something 
                        wonderful. Ever wanted to experience spider sense? Soar around the sky like Superman? Be rich like Batman? We got you covered. Introducing SuperEats! Take a super bite and experience super powers! The products we have created taste wonderful, but with a small twist. Each item has a pre-determined temporary super-human ability that the person attains on consumption.
                    </p>
                    <Link className="shop-btn" to="/shop">Shop Now</Link>
                </div>
                <img width="100px" src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,w_1000/v1/user-897545/submissions/lw6swq6sbnypyswrg1we.gif" alt="Flying superman image"/>
            </div>
            <div className='card-container'>
                {
                    cards.map((card, i) => {
                        return (
                            <LandingCard key={i} data={card}/>
                        );
                    })
                }
            </div>
        </div>
    );
}