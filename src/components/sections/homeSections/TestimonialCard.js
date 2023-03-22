import React from "react";
import './TestimonialCard.css';


const TestimonialCard = ({ name, testimonial, img }) => {
    return (
        <div id="testimonial-card">
            <img src={img} alt="Serving delicious dish" />
            <div className="textarea">
                <h1>{name}</h1>
                <p>{testimonial}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;