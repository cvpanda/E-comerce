import React , {useState}from 'react'
import {connect , useSelector , useDispatch} from 'react-redux'
import { Dropdown , Nav , Form , FormControl , Button , Badge , Modal , Col } from 'react-bootstrap'
import { buscarProductos , buscarTodos , traerUsuarios ,logOut } from '../../redux/actions';
import { Link } from 'react-router-dom'

export function LogIn(){
    const usuario = useSelector(store => store.usuario)
    const [show, setShow] = useState(false);
    var[ nombre , setNombre] = useState('')
    var[ contraseña , setContraseña] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const dispatch = useDispatch()
    const  handleLog = () => {
        dispatch(logOut())
    }
    const  handleLogIn = () => {
        
    }
    if(usuario.nombreusuario){
        return(
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {usuario.nombreusuario}
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
            <Link to = '/user'>
            <Dropdown.Item href="#/action-1" >Ver perfil</Dropdown.Item>
            </Link>
            <Dropdown.Item href="#/action-2" onClick={e => handleLog()}>Log out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            )
        }else {
            return(
                <>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                Usuario
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShow}>Iniciar Sesion</Dropdown.Item>
                <Link to = '/user/register'>
                <Dropdown.Item href="#/action-2">Registrarse</Dropdown.Item>
                </Link>
                </Dropdown.Menu>
                </Dropdown>
                
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit = { e => console.log("submiteo la form")}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nombre Usuario (mail)</Form.Label>
                            <Form.Control type="text" placeholder={"Nombre.."} 
                            onChange={e=> setNombre(e.target.value)} value = {nombre} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="text" placeholder={"Contraseña.."} 
                            onChange={e=> setContraseña(e.target.value)} value = {contraseña} />
                            </Form.Group>
                        </Form.Row>
                            <Form.Row>
                                <Button variant="danger" onClick={handleClose}>
                                Cancelar
                                </Button>
                                <Button variant="success" type= "submit" >
                                Ingresar
                                </Button>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
                </Modal>
                
                </>
                )
            }
            
        }
        
        export default connect()(LogIn)