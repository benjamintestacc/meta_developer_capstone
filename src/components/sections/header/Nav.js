import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./Nav.css";
import Hamburger from "../../../img/icons/menu.svg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <Header className="brand-name" />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={Hamburger} alt="hamburger" />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <Link
          className="link"
          to="/"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          Home
        </Link>
        <Link
          className="link"
          to="/about"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          About
        </Link>
        <Link
          className="link"
          to="/menu"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          Menu
        </Link>
        <Link
          className="link"
          to="/reservations"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          Reservations
        </Link>
        <Link
          className="link"
          to="/order"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          Order
        </Link>
        <Link
          className="link"
          to="/login"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
