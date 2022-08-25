import React from 'react';
import { Link } from 'react-router-dom';
import { LandingCard } from '../landing-card/LandingCard';
import "./Landing.scss";

export const Landing = () => {
    const cards = [
        {
            title: "Instant delivery",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis dolorum hic odit enim laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis dolorum hic odit ",
            src: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        },
        {
            title: "Instant delivery",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis dolorum hic odit enim laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis dolorum hic odit ",
            src: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        },
        {
            title: "Instant delivery",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis dolorum hic odit enim laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis dolorum hic odit ",
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