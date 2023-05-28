import './ProductView.scss';
import { products } from '../../../HomePage/components/ProductsPart/ProductsData';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import ZoomImg from '../ZoomInEffect/ZoomInEffect';
import cartIcon from './assets/cart-icon.svg';
import facebookIcon from './assets/Facebook.svg';
import heartIcon from './assets/heart-icon.svg';
import linkedInIcon from './assets/Linkedin.svg';
import mailIcon from './assets/Mail.svg';
import twitterIcon from './assets/Twitter.svg';

const ProductView = () => {
  const { productId } = useParams();

  const parsedProductId = productId ? parseInt(productId) : undefined;
  const product = products.find((product) => product.id === parsedProductId);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const handlePhotoClick = (index: React.SetStateAction<number>) => {
    setSelectedPhotoIndex(index);
  };

  const handleSizeClick = (index: React.SetStateAction<number>, price: string) => {
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
    // Handle the buy now functionality
  };

  const handleAddToCart = () => {
    // Handle adding the product to the cart
  };

  const handleAddToFavorites = () => {
    // Handle adding the product to favorites
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const selectedSize = product.sizes[selectedSizeIndex];

  const calculateSalePrice = (price: string, discountPercentage: number) => {
    // Calculate the new price based on the discount percentage
    const newPrice = parseFloat(price) * (1 - discountPercentage);
    return newPrice.toFixed(2); // Round the new price to 2 decimal places
  };

  return (
    <div className="container">
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
          <div className="prices-box">
            {product.sale ? (
              <>
                <div className="new-price">
                  ${calculateSalePrice(selectedSize.price, product.discountPercentage)}
                  {/* Display 'sale' on top of the products */}
                  {product.sale && (
                    <span className="discount-label">{`${Math.floor(
                      product.discountPercentage * 100,
                    )}%`}</span>
                  )}
                </div>
                <span className="old-price">${selectedSize.price}</span>
              </>
            ) : (
              <span className="regular-price">${selectedSize.price}</span>
            )}
          </div>

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
