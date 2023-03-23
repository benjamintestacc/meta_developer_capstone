import CallToAction from "../sections/homeSections/CallToAction";
import Specials from "../sections/homeSections/Specials";
import Testimonials from "../sections/homeSections/Testimonials";
import AboutRestaurant from "../sections/homeSections/AboutRestaurant";

function Home() {
  return (
    <div>
      <CallToAction />
      <Specials />
      <Testimonials />
      <AboutRestaurant />
    </div>
  );
}

export default Home;
