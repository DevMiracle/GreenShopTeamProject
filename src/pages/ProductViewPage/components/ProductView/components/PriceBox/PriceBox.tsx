import './PriceBox.scss';
import React from 'react';

interface PriceBoxProps {
  sale: boolean;
  discountPercentage: number;
  price: string;
}

const PriceBox: React.FC<PriceBoxProps> = ({ sale, discountPercentage, price }) => {
  const calculateSalePrice = (price: string, discountPercentage: number) => {
    const newPrice = parseFloat(price) * (1 - discountPercentage);
    return newPrice.toFixed(2);
  };

  return (
    <div className="prices-box">
      {sale ? (
        <>
          <div className="new-price">
            ${calculateSalePrice(price, discountPercentage)}
            {sale && <span className="discount-label">{`${Math.floor(discountPercentage * 100)}%`}</span>}
          </div>
          <span className="old-price">${price}</span>
        </>
      ) : (
        <span className="regular-price">${price}</span>
      )}
    </div>
  );
};

export default PriceBox;
