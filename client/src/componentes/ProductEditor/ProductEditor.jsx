import React , {useState, useEffect}from 'react'
import {connect} from 'react-redux'
import {Form , Button , Col, FormCheck ,FormControl,InputGroup} from 'react-bootstrap'
import {traerCategorias , buscarProductoEditar, editarProducto ,eliminarProducto} from '../../redux/actions'
import styles from './ProductEditor.module.css'
import Results from './Results/Results'

export class ProductEditor extends React.Component{
    constructor(props) {
        super(props);
        this.buscarProductoEditar = props.buscarProductoEditar;
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.buscador = React.createRef();
        this.nombre = React.createRef();
        this.valor = React.createRef();
        this.descripcion = React.createRef();
        this.stock = React.createRef();
        this.id = React.createRef();
       
    }
    
    handleSubmit(event) {
      var producto = {
        id: this.id.current.value,
        nombreproducto: this.nombre.current.value ,
        valor: this.valor.current.value ,
        stock: this.stock.current.value ,
        descripcion: this.descripcion.current.value,
      }
      this.props.editarProducto(producto);
      
      
    }
    handleSearch(event){

        this.buscarProductoEditar(this.buscador.current.value)
    }

    handleDelete(event){
        this.props.eliminarProducto(this.id.current.value)
    }

    testeo(){
        console.log("esto llega => " +this.props.buscado[0].nombreproducto)
        this.nombre.current.value =this.props.buscado[0].nombreproducto;
        this.valor.current.value = this.props.buscado[0].valor;
        this.stock.current.value = this.props.buscado[0].stock;
        this.descripcion.current.value = this.props.buscado[0].descripcion;
        this.id.current.value = this.props.buscado[0].id;
    }
    
    render() {
        return (
            <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" >Buscar Producto</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Nombre.."
                aria-label="Username"
                aria-describedby="basic-addon1"
                ref={this.buscador}
                />
                <InputGroup.Append>
                <Button variant ="outline-secondary" onClick = {e => this.handleSearch(e)}>Buscar</Button>
                <Button variant ="outline-secondary" onClick = {e => this.testeo(e)}>Editar</Button>
                </InputGroup.Append>
            </InputGroup>

            
            
            
            <form onSubmit={this.handleSubmit}>     
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" ref={this.nombre} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" ref={this.valor} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number" ref={this.stock} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" ref={this.id} readOnly />
                    </Form.Group>
                </Form.Row>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" type="text" ref={this.descripcion} />
            </Form.Group>
            <Button variant="success" type="submit" >Editar</Button>
            <Button variant="danger" onClick={e => this.handleDelete(e)} >Eliminar</Button>
            </form>
            </div>
            );
        }
    }
   
        
    
    function mapStateToProps(state) {
        
        return {
            categorias: state.categorias,
            seleccionadas: state.seleccionadas,
            detalle: state.detalle,
            productos: state.productos,
            buscado: state.buscado
        };
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            traerCategorias: () => dispatch(traerCategorias()),
            buscarProductoEditar: (datos) => dispatch(buscarProductoEditar(datos)),
            editarProducto: (datos) => dispatch(editarProducto(datos)),
            eliminarProducto: (datos) => dispatch(eliminarProducto(datos))
        };
    }     
    
    export default connect(
        mapStateToProps,
        mapDispatchToProps,
        )(ProductEditor)