import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Algorithms from './Pages/Algorithms/Algorithms';
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/900.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algorithms" element={<Algorithms />} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;