import './ProductsPart.scss';
import { products } from './ProductsData';
import React, { useState } from 'react';
import cartHoverIcon from './assets/cart-hover-icon.svg';
import cartIcon from './assets/cart-icon.svg';
import heartHoverIcon from './assets/heart-hover-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import noProducts from './assets/no-products.png';

export const ProductsPart = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category.includes(selectedCategory));
    }

    if (selectedFilter === 'New Arrival') {
      filtered = filtered.filter((product) => product.newArrival);
    } else if (selectedFilter === 'Sale') {
      filtered = filtered.filter((product) => product.sale);
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const getCategoryItemCount = (category: string) => {
    if (category === 'All') {
      return products.length;
    }
    return products.filter((product) => product.category.includes(category)).length;
  };

  const calculateSalePrice = (price: string, discountPercentage: number): string => {
    // Calculate the new price based on the discount percentage
    const newPrice = parseFloat(price) * (1 - discountPercentage);
    return newPrice.toFixed(2); // Round the new price to 2 decimal places
  };

  return (
    <div className="products-container">
      <div className="categories">
        <h4>Categories</h4>
        <div className="categories-list">
          <button
            type="button"
            className={`category-button ${selectedCategory === 'All' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('All')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('All');
              }
            }}
          >
            <span className="category-name">All</span>
            <span className="category-count">({getCategoryItemCount('All')})</span>
          </button>
          <button
            type="button"
            className={`category-button ${selectedCategory === 'House Plants' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('House Plants')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('House Plants');
              }
            }}
          >
            <span className="category-name">House Plants</span>
            <span className="category-count">({getCategoryItemCount('House Plants')})</span>
          </button>
          <button
            type="button"
            className={`category-button ${selectedCategory === 'Potter Plants' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Potter Plants')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Potter Plants');
              }
            }}
          >
            <span className="category-name">Potter Plants</span>
            <span className="category-count">({getCategoryItemCount('Potter Plants')})</span>
          </button>
          <button
            type="button"
            className={`category-button ${selectedCategory === 'Seeds' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Seeds')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Seeds');
              }
            }}
          >
            <span className="category-name">Seeds</span>
            <span className="category-count">({getCategoryItemCount('Seeds')})</span>
          </button>

          <button
            type="button"
            className={`category-button ${selectedCategory === 'Small Plants' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Small Plants')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Small Plants');
              }
            }}
          >
            <span className="category-name">Small Plants</span>
            <span className="category-count">({getCategoryItemCount('Small Plants')})</span>
          </button>

          <button
            type="button"
            className={`category-button ${selectedCategory === 'Big Plants' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Big Plants')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Big Plants');
              }
            }}
          >
            <span className="category-name">Big Plants</span>
            <span className="category-count">({getCategoryItemCount('Big Plants')})</span>
          </button>

          <button
            type="button"
            className={`category-button ${selectedCategory === 'Succulents' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Succulents')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Succulents');
              }
            }}
          >
            <span className="category-name">Succulents</span>
            <span className="category-count">({getCategoryItemCount('Succulents')})</span>
          </button>

          <button
            type="button"
            className={`category-button ${selectedCategory === 'Terrariums' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Terrariums')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Terrariums');
              }
            }}
          >
            <span className="category-name">Terrariums</span>
            <span className="category-count">({getCategoryItemCount('Terrariums')})</span>
          </button>
          <button
            type="button"
            className={`category-button ${selectedCategory === 'Gardening' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Gardening')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Gardening');
              }
            }}
          >
            <span className="category-name">Gardening</span>
            <span className="category-count">({getCategoryItemCount('Gardening')})</span>
          </button>

          <button
            type="button"
            className={`category-button ${selectedCategory === 'Accessories' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('Accessories')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick('Accessories');
              }
            }}
          >
            <span className="category-name">Accessories</span>
            <span className="category-count">({getCategoryItemCount('Accessories')})</span>
          </button>
        </div>
      </div>

      <div className="main">
        <div className="products-top">
          <button
            className={`product-filter ${selectedFilter === '' ? 'active' : ''}`}
            onClick={() => handleFilterClick('')}
          >
            All Plants
          </button>
          <button
            className={`product-filter ${selectedFilter === 'New Arrival' ? 'active' : ''}`}
            onClick={() => handleFilterClick('New Arrival')}
          >
            New Arrivals
          </button>
          <button
            className={`product-filter ${selectedFilter === 'Sale' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Sale')}
          >
            Sale
          </button>
        </div>
        <div className="products">
          {/*Display noProducts image when there is no products */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div className="product-box" key={index}>
                <div className="product-border">
                  {/* Display 'sale' on top of the products */}
                  {product.sale && (
                    <div className="discount-label">{`${Math.floor(
                      product.discountPercentage * 100,
                    )}% off`}</div>
                  )}
                  <div className="product-icons">
                    <div className="add-to-button">
                      <img src={cartIcon} alt="Add to Cart" className="default-icon" />
                      <img src={cartHoverIcon} alt="Add to Cart" className="hover-icon" />
                    </div>
                    <div className="add-to-button">
                      <img src={heartIcon} alt="Add to Favorites" className="default-icon" />
                      <img src={heartHoverIcon} alt="Add to Favorites" className="hover-icon" />
                    </div>
                  </div>
                  <img src={product.image} alt="" className="product-image" />
                </div>
                <span className="product-name">
                  {product.name}
                  {/* Display 'New' near the product's name */}
                  {product.newArrival && (
                    <div className="new-arrival-label">
                      <span className="new">New</span>
                    </div>
                  )}
                </span>
                {product.sale ? ( // Check if the product is on sale
                  <div>
                    <span className="new-price">
                      ${calculateSalePrice(product.price, product.discountPercentage)}
                    </span>{' '}
                    {/* Display the new price */}
                    <span className="old-price">${product.price}</span> {/* Display the old price */}
                  </div>
                ) : (
                  <span className="price">${product.price}</span> // Display the regular price
                )}
              </div>
            ))
          ) : (
            <div className="no-products">
              <img className="no-products-image" src={noProducts} alt="No products" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPart;
