import CallToAction from "../sections/homeSections/CallToAction";
import Specials from "../sections/homeSections/Specials";
import Testimonials from "../sections/homeSections/Testimonials";
import About from "../sections/homeSections/About";

function Home() {
    return(
        <div>
            <CallToAction/>
            <Specials />
            <Testimonials />
            <About/>
        </div>
    )
}

export default Home;