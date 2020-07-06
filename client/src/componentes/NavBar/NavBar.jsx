import React , {useState}from 'react'
import {connect , useSelector , useDispatch} from 'react-redux'
import { Navbar , Nav , Form , FormControl , Button , Badge} from 'react-bootstrap'
import { buscarProductos , buscarTodos } from '../../redux/actions';
import { Link } from 'react-router-dom'

export function NavBar (props){
    function handleSubmit(event){
        event.preventDefault();
        props.buscarProductos(producto)
    }
    const comprados = useSelector(store => store.carrito);
  const [producto, setProducto] = useState('')
  const dispatch = useDispatch()
    var handleClick = () => {
    dispatch(buscarTodos())
}
    return(
        <Navbar bg="dark" variant="dark">
            <Link to= '/'>
            <Navbar.Brand href="#home">Tienda</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
                <Link to= "/productos">
                <Nav.Link onClick = {e => handleClick()} href="#home">Productos</Nav.Link>
                </Link>
                <Link to= "/agregar">
                <Nav.Link href="#home">Creador</Nav.Link>
                </Link>
                <Link to= "/editor">
                <Nav.Link href="#home">Editor</Nav.Link>
                </Link>  
                <Link to= '/registro'>
                <Nav.Link href="#home">Usuario</Nav.Link>
                </Link>  
            </Nav>
            <Form inline onSubmit = {(e)=> handleSubmit(e)}>
                <Link to = "/carrito">
                    <Button variant="warning">
                    Carrito: <Badge variant="light">{comprados.length}</Badge>
                        <span className="sr-only">productos en carrito</span>
                    </Button>
                </Link>
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