import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="car-container lg:py-8">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
