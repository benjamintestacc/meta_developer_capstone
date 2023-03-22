import React from "react";
import './Card.css';
import { Link } from "react-router-dom";



const Card = ({ title, price, description, img }) => {
    return (
        <div>
            <div>
                <img src={img} alt="Serving delicious dish" />
            </div>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            <Link to="/order"><button className="btn">Order for Delivery</button></Link>
        </div>
    );
   };

   export default Card;