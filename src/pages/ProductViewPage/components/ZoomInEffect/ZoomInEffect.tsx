import 'react-medium-image-zoom/dist/styles.css';
import React from 'react';
import Zoom from 'react-medium-image-zoom';

interface ZoomImgProps {
  photo: string;
  alt: string;
  className: string;
}

const ZoomImg: React.FC<ZoomImgProps> = ({ photo, alt, className }) => (
  <Zoom>
    <img src={photo} alt={alt} className={className} />
  </Zoom>
);

export default ZoomImg;
