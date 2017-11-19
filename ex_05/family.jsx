import React from 'react'

//children passa tudo o que for declarado no component family para dentro do props.children
export default props => (
  <div>
    <h1>Familia</h1>
    { props.children }
  </div>
)
