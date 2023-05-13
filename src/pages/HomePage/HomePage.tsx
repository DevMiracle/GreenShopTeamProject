import "./HomePage.scss";
import HeroPart from "./components/HeroPart/HeroPart";
import PlantCard from "./components/PlantCard/PlantCard";
import ProductSlider from "../../shared/ProductSlider/ProductSlider";

// Uncomment this when you start to work
export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <PlantCard />
      <ProductSlider />
    </>
  );
};

export default HomePage;
