import Banner from "../../Navbar/Banner";
import Searchbar from "../HomeSections/Searchbar/Searchbar";
import Section1 from "../HomeSections/Section1";
import Section2 from "../HomeSections/Section2";
import Section3 from "../HomeSections/Section3";

const Home = () => {
    return (
        <div>
            <Searchbar></Searchbar>
            <Banner></Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            
        </div>
    );
};

export default Home;