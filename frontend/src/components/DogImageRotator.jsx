import React, { useState, useEffect } from 'react';
import DogImage from './DogImage';

const dogImageUrls = [
  'https://images.dog.ceo/breeds/hound-afghan/n02088094_1026.jpg',
  'https://images.dog.ceo/breeds/hound-basset/n02088238_1007.jpg',
  'https://images.dog.ceo/breeds/hound-blood/n02089078_1003.jpg',
  'https://images.dog.ceo/breeds/hound-english/n02089622_1022.jpg',
];

function DogImageRotator() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dogImageUrls.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <DogImage imageUrl={dogImageUrls[currentImageIndex]} />
    </div>
  );
}

export default DogImageRotator;
