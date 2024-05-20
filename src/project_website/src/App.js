import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import WeeklyUpdates from './pages/WeeklyUpdates';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div>
      <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/updates">Weekly Updates</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
</nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/updates" element={<WeeklyUpdates />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;