import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import Eye from "../../../img/icons/eye.svg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <div id="testimonials-cards-list">
        <TestimonialCard
          img={"https://i.pravatar.cc/150?img=3"}
          name="Micheal Caldwell"
          testimonial="This is the best Mediterranean food that I've ever had!"
        />
        <TestimonialCard
          img={"https://i.pravatar.cc/150?img=32"}
          name="Casey Lau"
          testimonial="My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
        />
        <TestimonialCard
          img={"https://i.pravatar.cc/150?img=13"}
          name="John Rosenblum"
          testimonial="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
        />
        <TestimonialCard
          img={"https://i.pravatar.cc/150?img=6"}
          name="Jim Reynor"
          testimonial="The food here really refreshed me after a late night shift
                at the local supply depot."
        />
        <TestimonialCard
          img={"https://i.pravatar.cc/150?img=8"}
          name="Brian Dean"
          testimonial="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."
        />
        <TestimonialCard
          img={"https://i.pravatar.cc/150?img=12"}
          name="Tyler Tohmine"
          testimonial="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."
        />
      </div>
    </section>
  );
};

export default Testimonials;
