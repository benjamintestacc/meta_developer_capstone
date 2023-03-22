import React from "react";
import './Specials.css';
import SpecialCard from "./SpecialCard";
import GreekSalad from '../../../img/salad.jpg'
import Bruschetta from '../../../img/bruschetta.jpg'
import LemonDessert from '../../../img/cake.jpg'


const Specials = () => {
    return (
        <section id="specials">
            <h1>This weeks specials</h1>
            <div id="specials-cards-list">
                <SpecialCard className="specials-card" img={GreekSalad} title="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard img={Bruschetta} title="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                    salt and olive oil."/>
                <SpecialCard img={LemonDessert} title="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                    and lemon zest."/>
            </div>
            
        </section>
    );
   };

   export default Specials;