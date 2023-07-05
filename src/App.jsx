import "./App.scss";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Numbers from "./components/Numbers";
import OurMission from "./components/OurMission";
import PopularPodcasts from "./components/PopularPodcasts";
import Reviews from "./components/Reviews";
import Rewards from "./components/Rewards";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Rewards />
      <Slider />
      <PopularPodcasts />
      <Reviews />
      <div className="features">
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <Numbers />
        <OurMission />
        <Footer />
      </div>
    </div>
  );
}

export default App;
