import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DogBreedList from './pages/DogBreedList';
import DogBreed from './pages/DogBreed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<DogBreedList />} />
        <Route path="/breeds/:breedId" element={<DogBreed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;