import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../css/App.css';

import Footer from "../components/Footer/Footer.jsx"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="*" element={<p>Error404</p>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
