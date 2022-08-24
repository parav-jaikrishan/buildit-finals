import React from 'react';
import { Link } from 'react-router-dom';
import { LandingCard } from '../landing-card/LandingCard';
import "./Landing.scss";

export const Landing = () => {
    return (
        <div className='landing'>
            <div className='landing-content'>
                <div className='text'>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore vel tempora, 
                        deserunt perferendis consequatur. Voluptates maiores exercitationem aspernatur saepe modi, 
                        distinctio a dolorum sequi!</p>
                        <Link className="shop-btn" to="/shop">Shop Now</Link>
                </div>
                <img width="100px" src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,w_1000/v1/user-897545/submissions/lw6swq6sbnypyswrg1we.gif" alt="Flying superman image"/>
                <div className='card-container'>
                    
                </div>
            </div>
        </div>
    );
}