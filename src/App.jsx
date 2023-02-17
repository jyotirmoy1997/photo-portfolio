import { Routes, Route} from 'react-router';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Gallery from './routes/gallery/gallery.component';
import About from './routes/about/about.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
