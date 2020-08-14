import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import Clients from './Components/Clients/Clients';
import Employees from './Components/Employees/Employees';
import Sales from './Components/Sales/Sales';
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
        <Route path='/employees'>
          <Employees />
        </Route>
        <Route path='/sales'>
          <Sales />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
