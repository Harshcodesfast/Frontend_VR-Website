import NavBar from "./conponents/navBar";
import HeroSection from "./conponents/heroSection";
import FeatureSection from "./conponents/FeatureSection";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
      </div>
    </div>
  );
}
