import "./PlantCard.scss";
import left_img from "./assets/LeftCardImage.png";
import right_img from "./assets/RightCardImage.png";
import arrow from "./assets/Arrow - Right.svg";

export const PlantCard = () => {
  const cards = [
    {
      image: left_img,
      header: "Summer cactus & succulents",
      title:
        "We are an online plant shop offering a wide range of cheap and trendy plants",
    },
    {
      image: right_img,
      header: "Tropical Treasures",
      title: "Spruce up your space with our affordable and stylish plants.",
    },
  ];

  return (
    <div className="wrapper">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={card.image} alt="" />
          </div>
          <div className="right-side">
            <div className="card-header">
              <span>{card.header}</span>
            </div>
            <div className="card-main">
              <span>{card.title}</span>
            </div>
            <button className="card-button">
              Find More <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantCard;
