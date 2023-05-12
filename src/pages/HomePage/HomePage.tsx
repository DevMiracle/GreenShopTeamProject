import "./HomePage.scss";
import HeroPart from "./components/HeroPart/HeroPart";
import PlantCard from "./components/PlantCard/PlantCard";
import{BlogPart} from './components/BlogPart/BlogPart'

// Uncomment this when you start to work
export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <PlantCard />
      <BlogPart />
    </>
  );
};

export default HomePage;
