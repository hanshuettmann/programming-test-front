import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
