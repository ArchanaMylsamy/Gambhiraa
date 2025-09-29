
import './App.css';
import Home from './pages/NewHome';
import ContactPage from './pages/Contact';
import Rooms from './pages/Rooms';
import { BrowserRouter , Route , Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rooms" element={<Rooms />} />
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;

