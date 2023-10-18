import { Routes, Route} from 'react-router';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import GalleryRoute from './routes/gallery-route/gallery.routes';
import About from './routes/about/about.component';
import BBS from "./routes/bibahoscapes/bbs.routes"
import PP from "./routes/pixelperfect/pp.routes"
import BStand from "./routes/brandstand/bstand.routes"
import MPedia from "./routes/mediapedia/mp.routes"
import ImagePage from './components/images-page/images-page.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home />} />
        <Route path='/gallery/*' element={<GalleryRoute />}/>

        {/* Separate Routes for Test */}
        <Route path="/bibahoscapes" element={<BBS />} />
        <Route path="/pixelperfect" element={<PP />} />
        <Route path="/brandstand" element={<BStand />} />
        <Route path="/mediapedia" element={<MPedia />} />

        <Route path='images'>
              <Route path=':imageId' element={<ImagePage/>}/>
          </Route>

        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
