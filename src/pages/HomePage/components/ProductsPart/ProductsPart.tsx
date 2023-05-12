import './ProductsPart.scss';
import React, { useState } from 'react';
import cartHoverIcon from './assets/cart-hover-icon.svg';
import cartIcon from './assets/cart-icon.svg';
import heartHoverIcon from './assets/heart-hover-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import product1 from './assets/product-1.png';
import product2 from './assets/product-2.png';
import product3 from './assets/product-3.png';
import product4 from './assets/product-4.png';
import product5 from './assets/product-5.png';
import product6 from './assets/product-6.png';
import product7 from './assets/product-7.png';
import product8 from './assets/product-8.png';
import product9 from './assets/product-9.png';

export const ProductsPart = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const products = [
    {
      name: 'Barberton Daisy',
      price: '119.00',
      image: product1,
      category: ['House Plants', 'Terrariums'],
    },
    {
      name: 'Angel Wing Begonia',
      price: '169.00',
      image: product2,
      category: ['Potter Plants'],
    },
    {
      name: 'African Violet',
      price: '199.00',
      image: product3,
      category: ['House Plants'],
    },
    {
      name: 'Beach Spider Lily',
      price: '129.00',
      image: product4,
      category: ['Potter Plants', 'Big Plants'],
    },
    {
      name: 'Blushing Bromeliad',
      price: '139.00',
      image: product5,
      category: ['Potter Plants'],
    },
    {
      name: 'Aluminum Plant',
      price: '179.00',
      image: product6,
      category: ['Seeds'],
    },
    {
      name: "Bird's Nest Fern",
      price: '99.00',
      image: product7,
      category: ['Seeds'],
    },
    {
      name: 'Broadleaf Lady Palm',
      price: '59.00',
      image: product8,
      category: ['Terrariums'],
    },
    {
      name: 'Chinese Evergreen',
      price: '39.00',
      image: product9,
      category: ['Seeds'],
    },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const getCategoryItemCount = (category: string) => {
    if (category === 'All') {
      return products.length;
    }
    return products.filter((product) => product.category.includes(category)).length;
  };

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category.includes(selectedCategory),
  );

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
            <div className="category-button-content">
              <span className="category-name">All</span>
              <span className="category-count">({getCategoryItemCount('All')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">House Plants</span>
              <span className="category-count">({getCategoryItemCount('House Plants')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Potter Plants</span>
              <span className="category-count">({getCategoryItemCount('Potter Plants')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Seeds</span>
              <span className="category-count">({getCategoryItemCount('Seeds')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Small Plants</span>
              <span className="category-count">({getCategoryItemCount('Small Plants')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Big Plants</span>
              <span className="category-count">({getCategoryItemCount('Big Plants')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Succulents</span>
              <span className="category-count">({getCategoryItemCount('Succulents')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Terrariums</span>
              <span className="category-count">({getCategoryItemCount('Terrariums')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Gardening</span>
              <span className="category-count">({getCategoryItemCount('Gardening')})</span>
            </div>
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
            <div className="category-button-content">
              <span className="category-name">Accessories</span>
              <span className="category-count">({getCategoryItemCount('Accessories')})</span>
            </div>
          </button>
        </div>
      </div>

      <div className="main">
        <div className="products-top">
          <a href="/" className="active">
            All Plants
          </a>
          <a href="/">New Arrivals</a>
          <a href="/">Sale</a>
        </div>
        <div className="products">
          {filteredProducts.map((product, index) => (
            <div className="product-box" key={index}>
              <div className="product-border">
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
              <p>{product.name}</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPart;
