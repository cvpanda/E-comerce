import React ,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Button,Col , Row , InputGroup, ButtonGroup, Badge} from 'react-bootstrap'
import {buscarTodos , eliminarDelCarrito , sendSubtotal} from '../../redux/actions'
import { useEffect } from 'react'

export function ProdCarrito({nombreproducto , valor ,stock ,  id ,subtotal , cantidad}){

  const[count , setCount] = useState(cantidad )
  
  const dispatch  = useDispatch();

  const handleClickAdd = () => {
    if(count >= stock ){ alert("el stock de "+nombreproducto+" es de "+stock+" unidades")
  }else{
    setCount(count => count+1)
   
    
  }
    
  }
  const handleClickSus = () => {
    if(count == 0){return 
    } else {
      setCount(count => count-1)
      
    }
  }

  const handleDelete = (id) =>  {
   console.log(id)
    dispatch(eliminarDelCarrito(id))
  }

  const handleTotal = () => {
    var total = valor * count
    
    return total
    
  }
 
  var total = handleTotal()
  
return(
    <InputGroup className="mb-3">
      <Button  onClick = {(e) => dispatch(sendSubtotal(total , id))}>add</Button>
        <InputGroup.Text  id="basic-addon2" >{count} {nombreproducto}  ${valor}   Total:  ${total}   </InputGroup.Text>
      <ButtonGroup>
        <Button variant="outline-secondary" onClick={e=> handleClickAdd()}>+</Button>
        <Button variant="outline-secondary" onClick={(e)=> handleClickSus()}>-</Button>
        <Button variant="danger" onClick={() => (handleDelete(id))}>X</Button>
      </ButtonGroup> 
    
  </InputGroup>
)
}

export default ProdCarrito