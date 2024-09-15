import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Materials from './pages/Materials';
import Assignments from './pages/Assignments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
    </Router>
  );
}

export default App;
