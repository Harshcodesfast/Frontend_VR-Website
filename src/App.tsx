import NavBar from "./conponents/NavBar";
import HeroSection from "./conponents/heroSection";
import FeatureSection from "./conponents/FeatureSection";
import WorkFlow from "./conponents/WorkFlow";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
      </div>
    </div>
  );
}
