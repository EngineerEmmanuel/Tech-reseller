import Become from "../Become";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HowWeHelpSection from "./HowWeHelpSection";
import Join from "./Join";
import Nav from "./Nav";
import WhoweAreSection from "./WhoweAreSection";
// import MediaQuery from '..Component/mediaQuery';

const Home = () => {
    return ( 
        <section>
            <Nav/>
            <HeroSection/>
            <WhoweAreSection/>
            <Become/>
            <HowWeHelpSection/>
            <FAQSection/>
            <Join/>
            <Footer/>
        </section>
     );
}
 
export default Home;