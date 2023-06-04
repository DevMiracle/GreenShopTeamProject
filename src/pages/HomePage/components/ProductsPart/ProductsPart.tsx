import './ProductsPart.scss';
import { Link } from 'react-router-dom';
import { products } from './ProductsData';
import MinimumDistanceSlider from './MinimumDistanceSlider/MinimumDistanceSlider';
import React, { useEffect, useRef, useState } from 'react';
import arrowDownIcon from './assets/arrowhead-down-icon.svg';
import cartHoverIcon from './assets/cart-hover-icon.svg';
import cartIcon from './assets/cart-icon.svg';
import heartHoverIcon from './assets/heart-hover-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import noProducts from './assets/no-products.png';
import superSale from './assets/super-sale-banner.png';

export const ProductsPart = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('Default sorting');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  // Initialize minPrice and maxPrice with the minimum and maximum possible prices
  const initialMinPrice = Math.min(...products.map((product) => parseFloat(product.sizes[0].price) - 1));
  const initialMaxPrice = Math.max(...products.map((product) => parseFloat(product.sizes[0].price) + 1));

  // Set the initial values in the state
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSortOptionClick = (sortOption: string) => {
    setSelectedSort(sortOption);
    setDropdownOpen(false);
  };

  const handleFilterClick = (filter: React.SetStateAction<string>) => {
    setSelectedFilter(filter);
  };

  const handleSliderChange = (values: number[]) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedFilter('');
    setSelectedSort('Default sorting');
    setMinPrice(initialMinPrice);
    setMaxPrice(initialMaxPrice);
  };

  const calculateSalePrice = (price: string, discountPercentage: number) => {
    // Calculate the new price based on the discount percentage
    const newPrice = parseFloat(price) * (1 - discountPercentage);
    return newPrice.toFixed(2); // Round the new price to 2 decimal places
  };

  const getFilteredProducts = () => {
    let filtered = [...products];

    // Filter the products based on the selected category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category.includes(selectedCategory));
    }

    // Filter the products based on the selected filter
    if (selectedFilter === 'New Arrival') {
      filtered = filtered.filter((product) => product.newArrival);
    } else if (selectedFilter === 'Sale') {
      filtered = filtered.filter((product) => product.sale);
    }

    // Filter the products based on the price range
    filtered = filtered.filter((product) => {
      const price = product.sale
        ? calculateSalePrice(product.sizes[0].price, product.discountPercentage)
        : product.sizes[0].price;
      return parseFloat(price) >= minPrice && parseFloat(price) <= maxPrice;
    });

    // Sort the products based on selectedSort
    if (selectedSort === 'Price Up') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.sizes[0].price);
        const priceB = parseFloat(b.sizes[0].price);
        return priceA - priceB;
      });
    } else if (selectedSort === 'Price Down') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.sizes[0].price);
        const priceB = parseFloat(b.sizes[0].price);
        return priceB - priceA;
      });
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    return filtered.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const filteredProducts = getFilteredProducts();

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const getCategoryItemCount = (category: string) => {
    if (category === 'All') {
      return products.length;
    }
    return products.filter((product) => product.category.includes(category)).length;
  };

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="products-container-on-home">
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
          <h4>Price Range</h4>
          <div className="price-range-slider-container">
            <MinimumDistanceSlider
              minPrice={minPrice}
              maxPrice={maxPrice}
              onSliderChange={handleSliderChange}
            />
            <span className="price-range-distance-box">
              Price:
              <p className="price-range-distance">
                {minPrice}$ - {maxPrice}$
              </p>
            </span>
            <button className="reset-button" onClick={handleResetFilters}>
              Reset All
            </button>
          </div>
          <div className="banner-container">
            <img className="super-sale-banner-image" src={superSale} alt="" />
          </div>
        </div>

        <div className="main">
          <div className="products-top">
            <div className="filters">
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
            <div className="sort-by">
              <p>Sort by:</p>
              <div className="dropdown" ref={dropdownRef}>
                <button
                  className={`dropdown-button ${dropdownOpen ? 'open' : ''}`}
                  onClick={handleDropdownToggle}
                >
                  {selectedSort}
                  <img
                    src={arrowDownIcon}
                    alt="Toggle Dropdown"
                    className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`}
                  />
                </button>
                <div className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
                  <button onClick={() => handleSortOptionClick('Default sorting')}>Default sorting</button>
                  <button onClick={() => handleSortOptionClick('Price Up')}>Price Up</button>
                  <button onClick={() => handleSortOptionClick('Price Down')}>Price Down</button>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            {/*Display noProducts image when there are no products to show */}
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Link key={index} to={`/product/${product.id}`} className="product-link-to">
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
                      <img src={product.photos[0]} alt="" className="product-image" />
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
                    {product.sale ? (
                      // Check if the product is on sale
                      <div>
                        <span className="new-price">
                          ${calculateSalePrice(product.sizes[0].price, product.discountPercentage)}
                        </span>{' '}
                        {/* Display the new price */}
                        <span className="old-price">${product.sizes[0].price}</span>{' '}
                        {/* Display the old price */}
                      </div>
                    ) : (
                      <span className="price">${product.sizes[0].price}</span> // Display the regular price
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-products">
                <img className="no-products-image" src={noProducts} alt="No products" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pagination-box">
        <div className="pagination">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPart;
