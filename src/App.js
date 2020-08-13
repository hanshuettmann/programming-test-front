import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import Clients from './Components/Clients/Clients';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
