import { Routes, Route } from 'react-router-dom'; // Yönlendirici parçalar
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Home from './components/Home';
import SensorsPage from './components/SensorsPage';
import AIPage from './components/AIPage';
import MobilePage from './components/MobilePage';
import AboutPage from './components/AboutPage';
import CreditsPage from './components/CreditsPage'; // DOĞRUSU (Eğer components içindeyse)
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />
      <ChatWidget />
      {/* Sayfa Değişen Kısım Burası */}
      <Routes>
       <Route path="/" element={<Home />} />
  <Route path="/sensors" element={<SensorsPage />} />
  <Route path="/ai" element={<AIPage />} />
  <Route path="/mobile" element={<MobilePage />} />
  <Route path="/about" element={<AboutPage />} /> {/* <-- YENİ EKLENEN */}
 <Route path="/kaynakca" element={<CreditsPage />} />
      </Routes>

      <MyFooter />
    </div>
  );
}

export default App;