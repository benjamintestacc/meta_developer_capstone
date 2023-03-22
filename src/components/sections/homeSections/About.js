import React from "react";
import './About.css';
import Chefs from '../../../img/chefs.jpg'
import Food from '../../../img/gourmet.jpg'


const About = () => {
    return (
        <section id="about">
            <div id="description">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </div>
            <div id="pictures">
                <img id="chefs" src={Chefs} alt="Serving delicious dish" />
                <img id="food" src={Food} alt="Serving delicious dish" />
            </div>
        </section>
    );
   };

   export default About;