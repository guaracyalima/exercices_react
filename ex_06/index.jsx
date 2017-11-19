import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './members'
ReactDOM.render(
  <Family lastName='Araujo'>
    <Member name='guabirabaDev' />
    <Member name='Bucetilda' />
  </Family>,
  document.getElementById('app')
)
