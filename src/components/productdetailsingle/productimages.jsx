import React, { useState, useEffect } from 'react';
import './productdeets'

// stop

function ProductImages({img}) {
  const [mainImage, setMainImage] = useState(img[0]);
  const thumbnailImages = img.slice(0,4);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  }
  return (
    <div className="product-photo">
      <div className="main-photo">
        <div className="main-picture">
          <img src={mainImage}></img>
        </div>
      </div>
      <div className='thumbnail-picture'>
        {thumbnailImages.map((image, index) => (
          <img 
            key={index}
            src={image}
            onClick={() => handleThumbnailClick(image)}
          />

        ))}
      </div>
    </div>
  );
}

export default ProductImages;
