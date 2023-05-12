import './BlogPart.scss';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import link_arrow from './assets/link-arrow.svg';

export const BlogPart = () => {
  const blogCards = [
    {
      image: card1,
      date: 'September 12 I Read in 6 minutes',
      header: 'Cactus & Succulent Care Tips',
      main: 'Cacti and succulents are easy care plants for any home or patio.',
    },
    {
      image: card2,
      date: 'September 13  I Read in 2 minutes',
      header: 'Top 10 Succulents for Your Home',
      main: 'Best in hanging baskets. Prefers medium to high light.',
    },
    {
      image: card3,
      date: 'September 15  I Read in 3 minutes',
      header: 'Cacti & Succulent Care Tips',
      main: 'Cacti and succulents thrive in containers and because most are..',
    },
    {
      image: card4,
      date: 'September 15  I Read in 2 minutes',
      header: 'Best Houseplants Room by Room',
      main: 'The benefits of houseplants are endless. In addition to..',
    },
  ];

  return (
    <div className="blog_wrapper">
      <h2>Our Blog Posts</h2>
      <span className="title">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </span>

      <div className="blog_cards">
        {blogCards.map((blogCard, index) => (
          <div className="card" key={index}>
            <div className="card_img">
              <img src={blogCard.image} alt="" />
            </div>
            <div className="main">
              <span className="date">{blogCard.date}</span>
              <div className="card_header">{blogCard.header}</div>
              <div className="card_main_text">{blogCard.main}</div>
              <div className="link">
                <a href="/">
                  Read More <img src={link_arrow} alt="/" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPart;
