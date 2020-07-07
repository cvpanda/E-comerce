import React , {useState, useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {connect} from 'react-redux'
import {Form , Button , Col, FormControl, FormGroup, Container} from 'react-bootstrap'
import {registrarUsuario} from '../../redux/actions'

export function RegistroUsuario(){
    const dispatch  = useDispatch();
    var [nombre  , setNombre] = useState('')
    var [apellido  , setApellido] = useState('')
    var [dni  , setDni] = useState()
    var [mail  , setMail] = useState()
    var [password  , setPassword] = useState()
    var [nacimiento  , setNacimiento] = useState()
    var [ciudad  , setCiudad] = useState('')
    var [pais  , setPais] = useState('')
    var [cp  , setCp] = useState()
    var [calle  , setCalle] = useState()
    var [altura  , setAltura] = useState()
    var [extras  , setExtras] = useState()

    var usuario = { nombre , apellido , dni , mail , password , nacimiento , ciudad , pais , cp , calle , altura ,extras }

   function handleSubmit () {
       console.log("handle sale con datos" ,usuario)
       alert("apretaste el boton")
        dispatch(registrarUsuario(usuario))
    }

    return(
        <Container>
            <h3>Registrarse</h3>
            <Form onSubmit={e => handleSubmit()} >
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Nombre:</Form.Label>
                        <FormControl type = "text" value={nombre} onChange={e => setNombre(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Apellido:</Form.Label>
                        <FormControl type = "text"value={apellido} onChange={e => setApellido(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>DNI:</Form.Label>
                        <FormControl type = "number"value={dni} onChange={e => setDni(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Mail:</Form.Label>
                        <FormControl type = "mail" value={mail} onChange={e => setMail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Constraseña:</Form.Label>
                        <FormControl type = "password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={7}> 
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <FormControl type = "date" value={nacimiento} onChange={e => setNacimiento(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} > 
                        <Form.Label>Ciudad</Form.Label>
                        <FormControl type = "text"  value={ciudad} onChange={e => setCiudad(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Pais</Form.Label>
                        <FormControl type = "text" value={pais} onChange={e => setPais(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Codigo Postal</Form.Label>
                        <FormControl type = "text" value={cp} onChange={e => setCp(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={8}> 
                        <Form.Label>Direccion: calle</Form.Label>
                        <FormControl type = "text" placeholder= "calle" value={calle} onChange={e => setCalle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>numero</Form.Label>
                        <FormControl type = "text" placeholder= "altura" value={altura} onChange={e => setAltura(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>extras</Form.Label>
                        <FormControl type = "text" placeholder= "piso/departamento" value={extras} onChange={e => setExtras(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" variant = "success">Crear Cuenta</Button>
            </Form>
        </Container>
    )
}