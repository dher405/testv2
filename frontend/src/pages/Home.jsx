import DogImage from '../components/DogImage';

function Home() {
  return (
    <div className="bg-slate-900 text-slate-200 p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dog Website!</h1>
      <p>Learn about different dog breeds.</p>
      <div className="flex flex-wrap gap-4">
        <DogImage src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="Afghan Hound" />
        <DogImage src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_3000.jpg" alt="Boston Bulldog" />
        <DogImage src="https://images.dog.ceo/breeds/pug/n02110958_1705.jpg" alt="Pug" />
      </div>
    </div>
  );
}

export default Home;