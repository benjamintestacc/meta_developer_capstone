import React from "react";
import './Specials.css';
import { Link } from "react-router-dom";
import Card from "./Card";


const Specials = () => {
    return (
        <section>
            <Card 
                title={title} 
                price={price} 
                description={description} 
                img={project.Img} 
            />
        </section>
    );
   };

   export default Specials;