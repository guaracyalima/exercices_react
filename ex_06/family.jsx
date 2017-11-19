import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'
//children passa tudo o que for declarado no component family para dentro do props.children
export default props => (
  <div>
    <h1>Familia</h1>
    { childrenWithProps(props.children, props)}
  </div>
)
