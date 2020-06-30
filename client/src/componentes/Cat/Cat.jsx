import React from 'react'
import {connect} from 'react-redux'

import {Badge} from 'react-bootstrap'

export function Cat ({categorias}) {
    return(
        <Badge pill variant="light">
        {categorias}
      </Badge>
    )
}

export default connect()(Cat)