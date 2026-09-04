import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Project";

import Skill from "../Skill/Skill";




const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
};

export default Home;