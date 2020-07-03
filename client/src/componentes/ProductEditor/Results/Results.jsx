import React , {useState, useEffect}from 'react'
import {connect} from 'react-redux'
import {Form , Button , Row, FormCheck ,FormControl,InputGroup} from 'react-bootstrap'


export function Results(nombre){
    return(
        <div>
            <Row>
                <h4>{nombre}</h4>               
            </Row>
        </div>
    )
}

 
export default connect()(Results)