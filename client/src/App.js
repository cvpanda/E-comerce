import React from 'react';
import Catalogo from './componentes/Catalogo/Catalogo'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import './App.css';
import { DetalleProd } from './componentes/DetalleProd/DetalleProd';

function App() {
  return (
    <React.Fragment>
    <Route path= '/' component={NavBar} />
    <Route path= '/' component={Catalogo} />
    <Route path= '/producto/:idproducto' component={DetalleProd} />
    </React.Fragment>
  );
}

export default App;
