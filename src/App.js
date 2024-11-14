// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Spin from './Components/Spin';
import Spin2 from './Components/Spin2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<Spin/>} />
        <Route path="/spin2" element={<Spin2/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
