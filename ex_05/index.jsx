import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './members'
ReactDOM.render(
  <Family>
    <Member name='guabirabaDev' lastName='full stack'/>
  </Family>,
  document.getElementById('app')
)
