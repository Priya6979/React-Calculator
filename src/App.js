import React from 'react'
import Calci from './Calculator/Calci.js';
import Footer from './Calculator/Footer.js';
import Header from './Calculator/Header.js';
import './Calculator/Style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Calci />
      <Footer/>
    </div>
  );
}

export default App;
