import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/">
      <div>
       <NavBar />
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
