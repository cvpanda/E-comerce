import React from 'react';
import Catalogo from './componentes/catalogo/catalogo.js'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Route path= '/' component={Catalogo} />
    </React.Fragment>
  );
}

export default App;