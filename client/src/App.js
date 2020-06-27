import React from 'react';
import Catalogo from './componentes/Catalogo/Catalogo'
import formProduct from './componentes/formulario_productos/formProduct'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Route exact path= '/' component={Catalogo} />
    <Route  path= '/form' component={formProduct} />
    </React.Fragment>
  );
}

export default App;
var countArray = function(array){
  if(array.length === 0){
  return 0;
  }
  else {
    array = array.join()  
   // for (var i = 0; i < array.length; i++) {
     
  //}
   return array;
  }
}