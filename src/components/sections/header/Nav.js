import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./Nav.css";
import Hamburger from '../../../img/hamburger.svg';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <Header className="brand-name"/>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded)}}>
                <img src={Hamburger} alt="hamburger"/>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <div  className="navigation-menu">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/menu">Menu</Link>
                    <Link className="link" to="/reservations">Reservations</Link>
                    <Link className="link" to="/order">Order</Link>
                    <Link className="link" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;