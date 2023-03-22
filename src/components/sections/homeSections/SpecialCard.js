import React from "react";
import './SpecialCard.css';
import { Link } from "react-router-dom";



const SpecialCard = ({ title, price, description, img }) => {
    return (
        <div>
            <img src={img} alt="Serving delicious dish" />
            <div className="textarea">
                <h1>{title}</h1>
                <h2>{price}</h2>
                <p>{description}</p>
                <Link to="/order"><button className="btn">Order for Delivery</button></Link>
            </div>
        </div>
    );
};

export default SpecialCard;