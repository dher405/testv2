import React, { useState, useEffect } from 'react';

const ALL_IMAGES = [
  'https://images.dog.ceo/breeds/labrador/n02099712_2853.jpg',
  'https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg',
  'https://images.dog.ceo/breeds/bulldog-french/n02108915_618.jpg',
  'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
  'https://images.dog.ceo/breeds/husky/n02110185_10047.jpg',
  'https://images.dog.ceo/breeds/golden-retriever/n02099601_3004.jpg',
  'https://images.dog.ceo/breeds/boxer/n02108089_1135.jpg',
  'https://images.dog.ceo/breeds/dalmatian/n02101388_1000.jpg',
  'https://images.dog.ceo/breeds/germanshepherd/n02106662_2000.jpg',
  'https://images.dog.ceo/breeds/chihuahua/n02085620_1001.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_4545.jpg',
  'https://images.dog.ceo/breeds/african/n02113799_1007.jpg',
  'https://images.dog.ceo/breeds/airedale/n02096051_2752.jpg',
  'https://images.dog.ceo/breeds/basenji/n02109525_1069.jpg',
  'https://images.dog.ceo/breeds/bloodhound/n02088466_1007.jpg',
  'https://images.dog.ceo/breeds/borzoi/n02090622_1008.jpg',
  'https://images.dog.ceo/breeds/briard/n02105251_1001.jpg',
  'https://images.dog.ceo/breeds/cattledog-australian/n02096294_1001.jpg',
  'https://images.dog.ceo/breeds/clumber/n02101556_1001.jpg',
  'https://images.dog.ceo/breeds/cocker/n02102318_1001.jpg',
  'https://images.dog.ceo/breeds/collie-border/n02106166_1001.jpg',
  'https://images.dog.ceo/breeds/dane-great/n02109047_1001.jpg',
  'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_1001.jpg',
  'https://images.dog.ceo/breeds/doberman/n02107142_1000.jpg',
  'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1001.jpg',
  'https://images.dog.ceo/breeds/entlebucher/n02108000_1001.jpg',
  'https://images.dog.ceo/breeds/eskimo/n02109961_1001.jpg',
  'https://images.dog.ceo/breeds/groenendael/n02105056_1001.jpg',
  'https://images.dog.ceo/breeds/hound-basset/n02088238_1001.jpg',
  'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1001.jpg',
  'https://images.dog.ceo/breeds/keeshond/n02112350_1001.jpg',
  'https://images.dog.ceo/breeds/kelpie/n02105505_1001.jpg',
  'https://images.dog.ceo/breeds/komondor/n02105505_2001.jpg',
  'https://images.dog.ceo/breeds/kuvasz/n02104029_1001.jpg',
  'https://images.dog.ceo/breeds/leonberg/n02111129_1001.jpg',
  'https://images.dog.ceo/breeds/malinois/n02105162_1000.jpg',
  'https://images.dog.ceo/breeds/maltese/n02085936_1000.jpg',
  'https://images.dog.ceo/breeds/pomeranian/n02112013_1000.jpg',
  'https://images.dog.ceo/breeds/samoyed/n02111889_1000.jpg',
  'https://images.dog.ceo/breeds/rottweiler/n02106550_1000.jpg',
  'https://images.dog.ceo/breeds/shihtzu/n02086240_1000.jpg',
  'https://images.dog.ceo/breeds/chow/n02112137_1000.jpg',
  'https://images.dog.ceo/breeds/akita/n02099601_1000.jpg',
  'https://images.dog.ceo/breeds/frise-bichon/n02085782_1001.jpg',
  'https://images.dog.ceo/breeds/havanese/n02085782_2001.jpg',
  'https://images.dog.ceo/breeds/hound-plott/n02088466_2001.jpg',
  'https://images.dog.ceo/breeds/hound-walker/n02089867_1001.jpg',
  'https://images.dog.ceo/breeds/eskimo/n02109961_2001.jpg',
  'https://images.dog.ceo/breeds/samoyed/n02111889_2001.jpg',
  'https://images.dog.ceo/breeds/husky/n02110185_11047.jpg',
];

const GROUPS = 5;
const ROTATION_MS = 15 * 60 * 1000;

const perGroup = Math.floor(ALL_IMAGES.length / GROUPS);
const groups = Array.from({ length: GROUPS }, (_, i) =>
  ALL_IMAGES.slice(i * perGroup, (i + 1) * perGroup)
);

export default function DogPictureRotator() {
  const [indices, setIndices] = useState(Array(GROUPS).fill(0));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices(prev => prev.map((idx, g) => (idx + 1) % groups[g].length));
    }, ROTATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: '#000080', minHeight: '100vh', fontFamily: 'Comic Sans MS, Arial, sans-serif', color: '#ffff00', textAlign: 'center', padding: '10px' }}>
      <marquee style={{ fontSize: '24px', color: '#ff00ff' }}>
        🐶 WELCOME TO THE AWESOME DOG ZONE 🐶 &nbsp;&nbsp; WOW SUCH DOGS &nbsp;&nbsp; VERY WOOF 🐾
      </marquee>
      <h1 style={{ fontSize: '36px', color: '#00ffff', textShadow: '3px 3px #ff0000', border: '4px dashed #ff00ff', display: 'inline-block', padding: '10px 20px', marginTop: '10px' }}>
        🌟 DOG PICTURE PALACE 🌟
      </h1>
      <p style={{ color: '#00ff00' }}>⭐ Pictures rotate every 15 minutes! ⭐</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        {groups.map((group, g) => (
          <div key={g} style={{ border: '4px ridge #ff00ff', background: '#000066', padding: '8px', width: '180px' }}>
            <div style={{ background: '#ff0000', color: '#ffff00', fontSize: '12px', fontWeight: 'bold', padding: '2px', marginBottom: '6px' }}>
              🐕 DOG #{g + 1} 🐕
            </div>
            <img src={group[indices[g]]} alt={'Dog ' + (g+1)}
              style={{ width: '160px', height: '160px', objectFit: 'cover', border: '3px solid #00ffff', display: 'block' }}
              onError={e => { e.target.src = 'https://placedog.net/160/160'; }} />
            <div style={{ fontSize: '10px', color: '#00ff00', marginTop: '4px' }}>
              Photo {indices[g] + 1} of {group.length}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', fontSize: '11px', color: '#ff9900' }}>
        <p>Best viewed in Internet Explorer 6.0 at 800x600</p>
        <p>🌟 Visitor Counter: <span style={{ background: '#000', color: '#0f0', padding: '0 4px', fontFamily: 'monospace' }}>001337</span> 🌟</p>
        <p>Made with GeoCities &copy; 2005</p>
      </div>
    </div>
  );
}
