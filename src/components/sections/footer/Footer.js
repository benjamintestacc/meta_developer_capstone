import React from "react";
import Logo from '../../../img/little-lemon-logo-vertical.png';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container">
            <div id="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-block">
                <h2>Doormat Navigation</h2>
                <ul>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/menu">Menu</Link>
                    <Link className="link" to="/reservations">Reservations</Link>
                    <Link className="link" to="/order">Order</Link>
                    <Link className="link" to="/login">Login</Link>
                </ul>
            </div>
            <div className="footer-block">
                <h2>Contact</h2>
                <p>2395 Maldove Way,<br/>Chicago Illinois</p>
                <p>(629)-243-6827</p>
                <p>info@littlelemon.com</p>
            </div>
            <div className="footer-block">
                <h2>Social Media</h2>
                <ul>
                    <li className="link"><a href="https://www.instagram.com/">Instagram</a></li>
                    <li className="link"><a href="https://www.facebook.com/">Facebook</a></li>
                    <li className="link"><a href="https://www.tiktok.com/">Tiktok</a></li>
                </ul>
            </div>
        </footer>
    );
   };

   export default Footer;