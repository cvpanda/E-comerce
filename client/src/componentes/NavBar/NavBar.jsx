import React , {useState}from 'react'
import {connect} from 'react-redux'
import { Navbar , Nav , Form , FormControl , Button} from 'react-bootstrap'
import { buscarProductos } from '../../redux/actions';

export function NavBar (props){
    function handleSubmit(event){
        event.preventDefault();
        props.buscarProductos(producto)
    }
    
  const [producto, setProducto] = useState('')

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Tienda</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Contacto</Nav.Link>
            </Nav>
            <Form inline onSubmit = {(e)=> handleSubmit(e)}>
                <FormControl type="text"placeholder="Buscar" name='producto' value = {producto} onChange={(e)=> setProducto(e.target.value)} className="mr-sm-2" />
                <Button variant="light" type="submit">Buscar</Button>
            </Form>
        </Navbar>
    )
}
function mapStateToProps(state) {
   
    return {
      productos: state.productos,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        buscarProductos: (nombre) => dispatch(buscarProductos(nombre)),
    };
  }     

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavBar)