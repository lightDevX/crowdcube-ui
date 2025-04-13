import Slider from "../../components/Slider/Slider";
import About from "../../pages/About/About";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <section className="container mx-auto">
        <About />
      </section>
    </>
  );
};

export default Home;
