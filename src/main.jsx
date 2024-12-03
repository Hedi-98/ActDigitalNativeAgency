import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import router components
import App from './App.jsx';  // Your main app component
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/ActDigitalNativeAgency/" element={<App />} />
        </Routes>
    </Router>
);
