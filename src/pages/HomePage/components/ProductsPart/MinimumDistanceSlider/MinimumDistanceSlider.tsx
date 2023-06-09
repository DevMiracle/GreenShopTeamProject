import '../ProductsPart';
import { products } from '../ProductsData';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

const handleResetFilters = () => {};

interface MinimumDistanceSliderProps {
  minPrice: number;
  maxPrice: number;
  onSliderChange: (values: number[]) => void;
}

const MinimumDistanceSlider: React.FC<MinimumDistanceSliderProps> = ({ onSliderChange }) => {
  // Initialize minPrice and maxPrice with the minimum and maximum possible prices
  const initialMinPrice = Math.min(
    ...products.map((product) => {
      const minSizePrice = Math.min(...product.sizes.map((size) => parseFloat(size.price)));
      return +(minSizePrice * (1 - product.discountPercentage)).toFixed(2);
    }),
  );
  const initialMaxPrice = Math.max(
    ...products.map((product) => {
      const maxSizePrice = Math.max(...product.sizes.map((size) => parseFloat(size.price)));
      return +(maxSizePrice * (1 - product.discountPercentage)).toFixed(2);
    }),
  );

  // Set the initial values in the state
  const [minDistance] = useState(initialMinPrice);
  const [maxDistance] = useState(initialMaxPrice);
  const [value, setValue] = useState<number[]>([minDistance, maxDistance]);

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    // Invoke the callback function with the updated slider values
    onSliderChange(value);
  };

  return (
    <Box>
      <Slider
        // Custom styles for the slider
        sx={{
          width: '80%', // Set the width of the slider
          color: '#46a358', // Change the color of the slider
          '& .MuiSlider-rail': {
            backgroundColor: '#46a358', // Customize the background color of the rail
          },
          '& .MuiSlider-track': {
            backgroundColor: '#46a358', // Customize the background color of the track
          },
          '& .MuiSlider-thumb': {
            backgroundColor: '#46a358', // Customize the background color of the thumb
          },
          '& .MuiSlider-valueLabel': {
            // Styles for the value label
            backgroundColor: '#46a358', // Customize the background color of the value label
            borderRadius: '4px',
          },
        }}
        getAriaLabel={() => 'Minimum distance'}
        min={minDistance}
        max={maxDistance}
        value={value}
        defaultValue={2}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
};

export default MinimumDistanceSlider;
