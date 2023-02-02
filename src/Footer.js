import React from "react";

const Footer = () => {
    return (
        <footer>
            <img src="img/Logo.svg" alt="Logo" />
            <nav>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
            <div>
                <h2>Contact</h2>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
                <h2>Social Media</h2>
                <ul>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.tiktok.com/">Tiktok</a></li>
                </ul>
            </div>
        </footer>
    );
   };

   export default Footer;