import React from 'react';
import Catalogo from './componentes/Catalogo/Catalogo'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import './App.css';
import  DetalleProd  from './componentes/DetalleProd/DetalleProd';
import ProductManager from './componentes/ProductManager/ProductManager';
import  ProductEditor  from './componentes/ProductEditor/ProductEditor';
import Carrito from './componentes/Carrito/Carrito';

function App() {
  return (
    <React.Fragment>
    <Route path= '/' component={NavBar} />
    <Route exact path= '/productos' component={Catalogo} />
    <Route exact path= '/productos/:id' component={DetalleProd} />
    <Route exact path= '/productos/agregar' component = {ProductManager} />
    <Route exact path= '/productos/editor' component = {ProductEditor} />
    <Route exact path= '/productos/carrito' component = {Carrito} />
    </React.Fragment>
  );
}

export default App;

