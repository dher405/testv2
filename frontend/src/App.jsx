import Header from './components/Header';
import Description from './components/Description';
import ImageGallery from './components/ImageGallery';
import DogImageRotator from './components/DogImageRotator';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <Description />
      <DogImageRotator />
      <ImageGallery />
    </div>
  );
}

export default App;