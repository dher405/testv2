import Header from './components/Header';
import Description from './components/Description';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <Description />
      <ImageGallery />
    </div>
  );
}

export default App;