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