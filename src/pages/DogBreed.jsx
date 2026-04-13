import { useParams } from 'react-router-dom';

function DogBreed() {
  const { breedId } = useParams();

  return (
    <div>
      <h1>Dog Breed: {breedId}</h1>
      <p>Information about breed {breedId}.</p>
    </div>
  );
}

export default DogBreed;