import "./PlantCard.scss";
import left_img from "./assets/LeftCardImage.png";
import right_img from "./assets/RightCardImage.png";
import arrow from "./assets/Arrow - Right.svg";

export const PlantCard = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-img">
          <img src={left_img} alt="" />
        </div>
        <div className="card-header">
          <span>Summer cactus & succulents</span>
        </div>
        <div className="card-main">
          <span>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </span>
        </div>
        <button className="card-button">
          Find More <img src={arrow} alt="" />
        </button>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={right_img} alt="" />
        </div>
        <div className="card-header">
          <span>Tropical Treasures</span>
        </div>
        <div className="card-main">
          <span>
            Spruce up your space with our affordable and stylish plants.
          </span>
        </div>
        <button className="card-button">
          Find More <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
