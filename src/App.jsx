import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/user-comp/Navbar';
import Footer from './components/user-comp/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/user-view/Home.jsx'

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
