import React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer id="contact-us">
            <div className="footerExtras">
                <section className="aboutAndSocial">
                    <h2>SuperEats</h2>
                    <p>
                        We, at CSIR have taken a pledge to make the life of people a lot better. We have been doing our best to acheive our goal of SuperEats being a successful project.
                    </p>
                </section>

                <section className="contact-us">
                    <h2>Contact Us</h2>
                    <ul className="contact">
                        <li key="1">
                            <span>Email:</span> supereats@gmail.com
                        </li>
                        <li key="2"><span>Phone number:</span> +91-11-49115500</li>
                        <li key="3"><span>Address:</span> Sector-XII, R K Puram, New Delhi, 110022, India
                        </li>
                    </ul>
                </section>
                <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.887959017228!2d77.21614281470822!3d28.692997982393926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ac9a220bd3%3A0x1e4cacca192cf7fe!2sCSIR-%20Institute%20of%20Genomics%20and%20Integrative%20Biology%20(IGIB)!5e0!3m2!1sen!2sin!4v1661404750461!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section className="copyright">
                    <p>Copyright &#169; 2022 <a href="https://github.com/parav-jaikrishan/">SuperEats</a></p>
                </section>
            </div> 
        </footer>
    );
}