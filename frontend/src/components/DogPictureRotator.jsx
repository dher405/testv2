import React, { useState, useEffect, useRef } from 'react';

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
  "https://images.dog.ceo/breeds/chihuahua/n02085620_1001.jpg",
  "https://images.dog.ceo/breeds/pomeranian/n02112013_1000.jpg",
  "https://images.dog.ceo/breeds/samoyed/n02111889_1000.jpg",
  "https://images.dog.ceo/breeds/doberman/n02107142_1000.jpg",
  "https://images.dog.ceo/breeds/maltese/n02085936_1000.jpg",
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_4545.jpg",
  "https://images.dog.ceo/breeds/african/n02113799_1007.jpg",
  "https://images.dog.ceo/breeds/airedale/n02096051_2752.jpg",
  "https://images.dog.ceo/breeds/basenji/n02109525_1069.jpg",
  "https://images.dog.ceo/breeds/bloodhound/n02088466_1007.jpg",
  "https://images.dog.ceo/breeds/borzoi/n02090622_1008.jpg",
  "https://images.dog.ceo/breeds/briard/n02105251_1001.jpg",
  "https://images.dog.ceo/breeds/chihuahua/n02085620_2001.jpg",
  "https://images.dog.ceo/breeds/clumber/n02101556_1001.jpg",
  "https://images.dog.ceo/breeds/cocker/n02102318_1001.jpg",
  "https://images.dog.ceo/breeds/collie-border/n02106166_1001.jpg",
  "https://images.dog.ceo/breeds/dane-great/n02109047_1001.jpg",
  "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_1001.jpg",
  "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1001.jpg",
  "https://images.dog.ceo/breeds/entlebucher/n02108000_1001.jpg",
  "https://images.dog.ceo/breeds/eskimo/n02109961_1001.jpg",
  "https://images.dog.ceo/breeds/groenendael/n02105056_1001.jpg",
  "https://images.dog.ceo/breeds/hound-basset/n02088238_1001.jpg",
  "https://images.dog.ceo/breeds/hound-ibizan/n02091244_1001.jpg",
  "https://images.dog.ceo/breeds/keeshond/n02112350_1001.jpg",
  "https://images.dog.ceo/breeds/kelpie/n02105505_1001.jpg",
  "https://images.dog.ceo/breeds/komondor/n02105505_2001.jpg",
  "https://images.dog.ceo/breeds/kuvasz/n02104029_1001.jpg",
  "https://images.dog.ceo/breeds/leonberg/n02111129_1001.jpg",
  "https://images.dog.ceo/breeds/malinois/n02105162_1000.jpg",
  "https://images.dog.ceo/breeds/maltese/n02085936_2001.jpg",
  "https://images.dog.ceo/breeds/appenzeller/n02107908_4508.jpg",
  "https://images.dog.ceo/breeds/cattledog-australian/n02096294_1001.jpg",
  "https://images.dog.ceo/breeds/frise-bichon/n02085782_1001.jpg",
  "https://images.dog.ceo/breeds/finnish-lapphund/n02101388_1001.jpg",
  "https://images.dog.ceo/breeds/havanese/n02085782_2001.jpg",
  "https://images.dog.ceo/breeds/hound-plott/n02088466_2001.jpg",
  "https://images.dog.ceo/breeds/hound-walker/n02089867_1001.jpg",
  "https://images.dog.ceo/breeds/eskimo/n02109961_2001.jpg",
  "https://images.dog.ceo/breeds/samoyed/n02111889_2001.jpg",
  "https://images.dog.ceo/breeds/husky/n02110185_11047.jpg"
];

const DogPictureRotator = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState('medium'); // slow, medium, fast
  const [transition, setTransition] = useState('fade'); // fade, slide, zoom
  const [direction, setDirection] = useState('forward'); // forward, backward

  const intervalRef = useRef(null);
  const swipeRef = useRef(null);

  const speeds = {
    slow: 5000,
    medium: 3000,
    fast: 1000,
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const random = () => {
    setIndex(Math.floor(Math.random() * images.length));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const setTimer = () => {
    clearInterval(intervalRef.current);
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (direction === 'forward') {
          next();
        } else {
          prev();
        }
      }, speeds[speed]);
    }
  };

  useEffect(() => {
    setTimer();
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, direction]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        togglePlay();
      } else if (e.code === 'ArrowLeft') {
        prev();
      } else if (e.code === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    swipeRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!swipeRef.current) return;

    const deltaX = e.changedTouches[0].clientX - swipeRef.current;
    const SWIPE_THRESHOLD = 50;

    if (deltaX > SWIPE_THRESHOLD) {
      prev();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      next();
    }

    swipeRef.current = null;
  };

  const getTransitionClass = () => {
    switch (transition) {
      case 'fade':
        return 'fade-transition';
      case 'slide':
        return 'slide-transition';
      case 'zoom':
        return 'zoom-transition';
      default:
        return 'fade-transition';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={images[index]}
        alt="Dog"
        style={{ maxWidth: '500px', maxHeight: '500px', transition: 'opacity 0.5s ease-in-out' }}
        onError={e => { e.target.src = 'https://placedog.net/200/200'; }}
        className={getTransitionClass()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />

      <div style={{ margin: '10px 0' }}>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
        <button onClick={random}>Random</button>
      </div>

      <div>
        <label>Speed:</label>
        <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="fast">Fast</option>
        </select>

        <label>Transition:</label>
        <select value={transition} onChange={(e) => setTransition(e.target.value)}>
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
          <option value="zoom">Zoom</option>
        </select>

        <label>Direction:</label>
        <select value={direction} onChange={(e) => setDirection(e.target.value)}>
          <option value="forward">Forward</option>
          <option value="backward">Backward</option>
        </select>
      </div>

      <div>
        Progress: {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default DogPictureRotator;
