import './App.css';
import NavMenu from './components/NavMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollbarGlobal from './components/ScrollbarGlobal';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollbarGlobal>
          <ScrollToTop />
          <Routes >
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ScrollbarGlobal>


      </Router>
    </>
  );
}

export default App;
