import Hero from "../../components/sections/Hero";
import SectionWhyDiro from "./SectionWhyDiro";
import SectionPartners from "./SectionPartners";
import Pricing from "../../components/sections/Pricing";
import Feature from "../../components/sections/Feature";
import Capabilities from "../../components/sections/Capabilities";
import Contact from "../../components/sections/Contact";



function HomePage() {
    return (
        <>
            <Hero />
            <SectionWhyDiro />
            <Capabilities />
            <Feature />
            <SectionPartners />
            <Pricing />
            <Contact />
        </>
    );
}

export default HomePage;