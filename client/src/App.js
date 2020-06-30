import React from 'react';
import Catalogo from './componentes/Catalogo/Catalogo'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import './App.css';
import  DetalleProd  from './componentes/DetalleProd/DetalleProd';
import ProductManager from './componentes/ProductManager/ProductManager';

function App() {
  return (
    <React.Fragment>
    <Route path= '/' component={NavBar} />
    <Route exact path= '/productos' component={Catalogo} />
    <Route exact path= '/producto/:idproducto' component={DetalleProd} />
    <Route exact path= '/productos/agregar' component = {ProductManager} />
    </React.Fragment>
  );
}

export default App;

