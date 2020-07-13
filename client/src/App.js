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
import { RegistroUsuario } from './componentes/RegistroUsuario/RegistroUsuario';
import { Order } from './componentes/Order/Order';
import { Ordenes } from './componentes/Order/Ordenes';
import { UserProfile } from './componentes/UserProfile/UserProdile';
import { UserRegister } from './componentes/UserRegister/UserRegister';

function App() {
  return (
    <React.Fragment>
    <Route path= '/' component={NavBar} />
    <Route exact path= '/productos' component={Catalogo} />
    <Route exact path= '/user' component={UserProfile} />
    <Route exact path= '/user/register' component={UserRegister} />
    <Route exact path= '/productos/:id' component={DetalleProd} />
    <Route exact path= '/agregar' component = {ProductManager} />
    <Route exact path= '/editor' component = {ProductEditor} />
    <Route exact path= '/carrito' component = {Carrito} />
    <Route exact path= '/registro'  component = {RegistroUsuario}/>
    <Route exact path= '/order'  component = {Ordenes}/>
    </React.Fragment>
  );
}

export default App;

