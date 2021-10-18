import About from "../Components/About/About";
import Capabilities from "../Components/Capabilities/Capabilities";
import Client from "../Components/Client/Client";
import Form from "../Components/Form/Form";
import Hero from "../Components/Hero/Hero";
import Portfolio from "../Components/Portfolio/Portfolio";

const Home = () => {
    return ( 
        <div className='container'>
            <Hero/>
            <About/>
            <Portfolio/>
            <Capabilities/>
            <Client/>
            <Form/>
        </div>
     );
}
 
export default Home;