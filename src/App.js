
import './App.css';
import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from "react-router-dom";
import Productos from './component/Productos';
import Producto from './component/Producto';
import Cart from './component/Cart';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Productos}/>
      <Route exact path="/products/:id" component={Producto}/>
      <Route exact path="/cart" component={Cart}/>
    </Switch>
    </>
  );
}

export default App;
