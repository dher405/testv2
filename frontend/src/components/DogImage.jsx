function DogImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="w-64 h-64 object-cover rounded-md" />
  );
}

export default DogImage;