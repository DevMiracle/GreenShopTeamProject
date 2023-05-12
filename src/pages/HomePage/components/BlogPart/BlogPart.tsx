import "./BlogPart.scss";
import card1 from "./assets/card1.png";

export const BlogPart = () => {
    return (
       <div className="blog_wrapper">
         <h2>Our Blog Posts</h2>
         <span className="title">We are an online plant shop offering a wide range of cheap and trendy plants. </span>

         <div className="blog-cards">
            <div className="card">
                <div className="card_img">
                    <img src={card1} alt="" />
                </div>
            </div>

         </div>
       </div> 
    );
}

export default BlogPart