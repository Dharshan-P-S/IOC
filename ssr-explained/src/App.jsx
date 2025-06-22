// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import OverviewPage from './pages/OverviewPage';
import BenefitsPage from './pages/BenefitsPage';
import WhenToUsePage from './pages/WhenToUsePage';
import './App.css'; // Import our final app-level styles

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/benefits-and-tradeoffs" element={<BenefitsPage />} />
            <Route path="/when-to-use" element={<WhenToUsePage />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;