import "./HomePage.scss";
import HeroPart from "./components/HeroPart/HeroPart";
import PlantCard from "./components/PlantCard/PlantCard";
import { ProductsPart } from './components/ProductsPart/ProductsPart';

export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <PlantCard />
      <ProductsPart />
    </>
  );
};

export default HomePage;
