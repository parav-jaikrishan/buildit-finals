import React from 'react';
import "./AboutContent.scss";

export const AboutContent = () => {
    return (
        <div className="about-content">
            <h1>About Us</h1>
            <p>SuperEats was launched to satiate the super power needs of children and adults alike. Everyone wants to experience some sort of super power, no matter how stupid it may sound. SuperEats provides this opportunity to everyone in the form of food.</p>
            <iframe src="https://www.youtube.com/embed/YOxDtGH92Jw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}