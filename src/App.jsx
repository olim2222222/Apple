import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Mac from './pages/Mac';
import Iphone from './pages/Iphone';
import Ipad from './pages/Ipad';
import Airpods from './pages/Airpods';
import Countries  from './pages/Countries';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
