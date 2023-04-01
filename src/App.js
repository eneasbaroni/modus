import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import GestionPublica from './pages/Gestion_Publica/GestionPublica';
import Home from './pages/Home/Home';
import SectorPirvado from './pages/Sector_Privado/SectorPirvado';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/gestion-publica' element={<GestionPublica/>}/>
          <Route path='/sector-privado' element={<SectorPirvado/>}/>
          <Route path='/presentation' element={<Presentation/>}/>

        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
