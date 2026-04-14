
import React, { useState, useEffect } from 'react';

const dogImages = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_4545.jpg",
  "https://images.dog.ceo/breeds/african/n02113799_1007.jpg",
  "https://images.dog.ceo/breeds/airedale/n02096051_2752.jpg",
];

function DogImageRotator() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dogImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, []);

  return (
    <img
      src={dogImages[currentImageIndex]}
      alt="Dog"
      style={{ maxWidth: '500px', maxHeight: '500px' }}
    />
  );
}

export default DogImageRotator;
