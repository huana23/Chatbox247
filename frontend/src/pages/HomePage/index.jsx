import Hero from "../../components/sections/Hero";
import SectionWhyDiro from "./SectionWhyDiro";
import Pricing from "../../components/sections/Pricing";
import SectionPartners from "./SectionPartners";
import Feature from "../../components/sections/Feature";
import Capabilities from "../../components/sections/Capabilities";
import Contact from "../../components/sections/Contact";



function HomePage() {
    return (
        <>
            <Hero />
            <SectionWhyDiro />
            <Pricing />
            <SectionPartners />
            <Feature />
            <Capabilities />
            <Contact />
        </>
    );
}

export default HomePage;