import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TradingDashboard from './components/TradingDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TradingDashboard />
  </React.StrictMode>
);