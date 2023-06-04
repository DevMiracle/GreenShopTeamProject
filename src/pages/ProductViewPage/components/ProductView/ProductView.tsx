import './ProductView.scss';
import { products } from '../../../HomePage/components/ProductsPart/ProductsData';
import { useCart } from '../../../CartPage/components/CartContext';
import { useNavigate, useParams } from 'react-router-dom';
import PriceBox from './components/PriceBox/PriceBox';
import React, { useState } from 'react';
import ZoomImg from './components/ZoomInEffect/ZoomInEffect';
import facebookIcon from './assets/Facebook.svg';
import heartIcon from './assets/heart-icon.svg';
import linkedInIcon from './assets/Linkedin.svg';
import mailIcon from './assets/Mail.svg';
import twitterIcon from './assets/Twitter.svg';

export const ProductView: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const parsedProductId = productId ? parseInt(productId) : undefined;
  const product = products.find((product) => product.id === parsedProductId);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleSizeClick = (index: number, price: string) => {
    if (price !== '-') {
      setSelectedSizeIndex(index);
    }
  };

  const handleDecreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleBuyNow = () => {
    if (!product) {
      return; // Product not found, handle accordingly
    }

    const selectedProduct = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.sizes[selectedSizeIndex].price),
      quantity: productQuantity,
      image: product.photos[selectedPhotoIndex],
    };

    addToCart(selectedProduct);
    navigate('/cart');
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) {
      return; // Product not found, handle accordingly
    }

    const selectedProduct = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.sizes[selectedSizeIndex].price),
      quantity: productQuantity,
      image: product.photos[selectedPhotoIndex],
    };

    addToCart(selectedProduct);
  };
  const handleAddToFavorites = () => {
    // Handle adding the product to favorites
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const selectedSize = product.sizes[selectedSizeIndex];

  return (
    <div className="product-view-container">
      <div className="product">
        <div className="images-box">
          <div className="small-images">
            {product.photos.map((photo, index) => (
              <button
                key={index}
                className={`small-image-border ${selectedPhotoIndex === index ? 'active' : ''}`}
                onClick={() => handlePhotoClick(index)}
              >
                <img src={photo} alt={`Product ${index + 1}`} className="additional-image" />
              </button>
            ))}
          </div>
          <div className="main-image-border">
            <ZoomImg
              photo={product.photos[selectedPhotoIndex]}
              alt="Main Product"
              className="main-product-image"
            />
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="details-top">
          <h3 className="product-header">{product.name}</h3>
          {/* Display 'New' near the product's name */}
          {product.newArrival && (
            <div className="new-arrival-label">
              <span className="new">New</span>
            </div>
          )}
        </div>
        <div className="price-and-stars">
          <PriceBox
            sale={product.sale}
            discountPercentage={product.discountPercentage}
            price={selectedSize.price}
          />
          <span className="stars"></span>
        </div>
        <div className="short-description">
          Short Description:
          <p className="description">{product.shortDescription}</p>
        </div>
        <div className="sizes">
          Sizes:
          <div className="size-options">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-button ${selectedSizeIndex === index ? 'active' : ''} ${
                  size.price === '-' ? 'unavailable' : ''
                }`}
                onClick={() => handleSizeClick(index, size.price)}
                disabled={size.price === '-'}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        <div className="product-actions">
          <div className="quantity">
            <button className="minus-quantity-button" onClick={handleDecreaseQuantity}>
              -
            </button>
            <span>{productQuantity}</span>
            <button className="plus-quantity-button" onClick={handleIncreaseQuantity}>
              +
            </button>
          </div>
          <button className="buy-now-button" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            <span> Add to Cart</span>
          </button>
          <button className="add-to-favorites-button" onClick={handleAddToFavorites}>
            <img src={heartIcon} alt="" />
          </button>
        </div>
        <div className="product-info">
          <span>
            Product Id: <p>{product.id}</p>
          </span>
          <span>
            Categories: <p>{product.category.join(', ')}</p>
          </span>
          <span>
            Tags: <p>{product.tags.join(', ')}</p>
          </span>
        </div>
        <div className="share-products">
          Share this products:
          <span className="icons-box">
            <a href="https://www.facebook.com">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="https://www.twitter.com">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={linkedInIcon} alt="" />
            </a>
            <a href="mailto:GreenShop@mail.com">
              <img src={mailIcon} alt="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
