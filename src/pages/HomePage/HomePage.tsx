import './HomePage.scss';
import HeroPart from "./components/HeroPart/HeroPart";
import PlantCard from "./components/PlantCard/PlantCard";

export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <PlantCard />
    </>
  );
};

export default HomePage;
