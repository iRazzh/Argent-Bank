import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../css/App.css';

import Homepage from "../pages/Homepage/Homepage"
import Connection from "../pages/Connection/Connection"
import User from "../pages/User/User"
import Footer from "../components/Footer/Footer.jsx"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<p>Error404</p>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
