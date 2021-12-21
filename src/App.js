
import './App.css';
import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from "react-router-dom";
import Productos from './component/Productos';
import Producto from './component/Producto';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Productos}/>
      <Route exact path="/products/:id" component={Producto}/>
    </Switch>
    </>
  );
}

export default App;
