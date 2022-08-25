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
                <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.92106946974!2d77.17298251542827!3d28.572132793562098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d6a4215eca1%3A0x238068ee5504b2d7!2sDPS%20RK%20PURAM%20MAIN%20ENTRY%20GATE!5e0!3m2!1sen!2sin!4v1660152460441!5m2!1sen!2sin" width="400" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section className="copyright">
                    <p>Copyright &#169; 2022 <a href="https://github.com/parav-jaikrishan/">Parav Jaikrishan</a></p>
                </section>
            </div> 
        </footer>
    );
}