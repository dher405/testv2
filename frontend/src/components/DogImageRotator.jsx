import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const images = [
  'https://images.dog.ceo/breeds/labrador/n02099712_2853.jpg',
  'https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg',
  'https://images.dog.ceo/breeds/bulldog-french/n02108915_618.jpg',
  'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
  'https://images.dog.ceo/breeds/husky/n02110185_10047.jpg',
];

const DogImageRotator = () => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const handleNavigate = (i) => {
    setIndex(i);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={images[index]} alt='dog' className='w-1/2 h-1/2 object-cover' />
      <div className='flex justify-center mt-4'>{
        images.map((_, i) => (
          <FontAwesomeIcon
            icon={faCircle}
            key={i}
            className={`mx-2 ${index === i ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => handleNavigate(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default DogImageRotator;