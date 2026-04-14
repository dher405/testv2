function ImageGallery() {
  const images = [
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_7452.jpg',
    'https://images.dog.ceo/breeds/african/n02113799_1007.jpg',
    'https://images.dog.ceo/breeds/airedale/n02096051_10708.jpg',
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Dog ${index + 1}`} className="rounded-lg" />
      ))}
    </div>
  );
}

export default ImageGallery;