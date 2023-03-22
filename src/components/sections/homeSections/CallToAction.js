import React from "react";
import './CallToAction.css';
import { Link } from "react-router-dom";
import Img from "../img/greek_salad.jpg"

const CallToAction = () => {
    return (
        <section className="call-to-action">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reservations"><button className="btn">Reserve a Table</button></Link>
            </div>
            <div className="section-right">
                    <img src={Img} alt="Serving delicious dish" />
            </div>
        </section>
    );
   };

   export default CallToAction;