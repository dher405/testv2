import React, { useState, useEffect } from 'react';
const images = [
  'https://images.dog.ceo/breeds/labrador/n02099712_2853.jpg',
  'https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg',
  'https://images.dog.ceo/breeds/bulldog-french/n02108915_618.jpg',
  'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
  'https://images.dog.ceo/breeds/husky/n02110185_10047.jpg',
];
const DogPictureRotator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <img src={images[index]} alt='Dog' onError={e => { e.target.src='https://placedog.net/200/200'; }}/>
    </div>
  );};
export default DogPictureRotator;