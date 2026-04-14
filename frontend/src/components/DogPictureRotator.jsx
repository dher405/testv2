import React, { useState, useEffect } from 'react';

const images = [
  "https://images.dog.ceo/breeds/labrador/n02099712_2853.jpg",
  "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg",
  "https://images.dog.ceo/breeds/bulldog-french/n02108915_618.jpg",
  "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
  "https://images.dog.ceo/breeds/husky/n02110185_10047.jpg",
  "https://images.dog.ceo/breeds/golden-retriever/n02099601_3004.jpg",
  "https://images.dog.ceo/breeds/boxer/n02108089_1135.jpg",
  "https://images.dog.ceo/breeds/dalmatian/n02101388_1000.jpg",
  "https://images.dog.ceo/breeds/germanshepherd/n02106662_2000.jpg",
  "https://images.dog.ceo/breeds/chihuahua/n02085620_1001.jpg"
];

const INTERVAL_MS = 3000;

function DogPictureRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % images.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <img
      src={images[index]}
      alt="Dog"
      style={{ maxWidth: '500px', maxHeight: '500px' }}
      onError={e => { e.target.src='https://placedog.net/200/200'; }}
    />
  );
}

export default DogPictureRotator;