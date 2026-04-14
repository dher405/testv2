import React from 'react';

function DogImage({ imageUrl }) {
  return (
    <img src={imageUrl} alt="Dog" className="max-w-md rounded-lg shadow-md" />
  );
}

export default DogImage;