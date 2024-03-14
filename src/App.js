import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Algorithms from './Pages/Algorithms/Algorithms';

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