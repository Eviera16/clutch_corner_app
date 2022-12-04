import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Utilities/NavBar";
import { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import GalleryPage from "./components/GalleryPage/GalleryPage";
import GadgetsPage from "./components/GadgetsPage/GadgetsPage";
import FAQPage from "./components/FAQPage/FAQPage";
import ContactsPage from "./components/ContactPage/ContactsPage.js";
import GalleryView from "./components/GalleryPage/GalleryView";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

const container = {
  padding: window.innerWidth * 0.1
}

function App() {
  const [height, width] = useWindowSize();

  return (
    <div>
      <NavBar />
      <div style={container}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/gadgets' element={<GadgetsPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/contact' element={<ContactsPage />} />
          <Route path='/gallery/gView' element={<GalleryView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
