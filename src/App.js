import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Arrow from './components/Arrow/Arrow';
import Footer from './components/Footer/Footer';
import GestionPublica from './pages/Gestion_Publica/GestionPublica';
import Home from './pages/Home/Home';
import SectorPirvado from './pages/Sector_Privado/SectorPirvado';
import { LanguageProvider } from './context/languageContext';
import { UserProvider } from './context/userContex';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <BrowserRouter>      
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/gestion-publica' element={<GestionPublica/>}/>
            <Route path='/sector-privado' element={<SectorPirvado/>}/>  
            <Route path='profile' element={<Profile/>}/>
          </Routes>
          <Arrow/>
          <Footer/>
        </BrowserRouter>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
