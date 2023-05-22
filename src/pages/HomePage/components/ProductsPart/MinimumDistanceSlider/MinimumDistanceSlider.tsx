import { products } from '../ProductsData';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

interface MinimumDistanceSliderProps {
  minPrice: number;
  maxPrice: number;
  onSliderChange: (values: number[]) => void;
}

const MinimumDistanceSlider: React.FC<MinimumDistanceSliderProps> = ({ onSliderChange }) => {
  const [value1, setValue1] = useState<number[]>([70, 180]);
  // Initialize minPrice and maxPrice with the minimum and maximum possible prices
  const initialMinPrice = Math.min(
    ...products.map((product: { price: string }) => parseFloat(product.price) - 1),
  );
  const initialMaxPrice = Math.max(
    ...products.map((product: { price: string }) => parseFloat(product.price)),
  );
  // Set the initial values in the state
  const [minDistance] = useState(initialMinPrice);
  const [maxDistance] = useState(initialMaxPrice);

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    // Invoke the callback function with the updated slider values
    onSliderChange(value1);
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
        value={value1}
        defaultValue={2}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
};

export default MinimumDistanceSlider;
