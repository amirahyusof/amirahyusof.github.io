import React from 'react';
import './index.css';
import styles from './css/App.module.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
