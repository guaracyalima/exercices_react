import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Lima'>
        <Member name='patricsia'/>
        <Member name='Capirosca '/>
        <Member name='Feijoada'/>
        <Member name='Xambari '/>
    </Family>
    , document.getElementById('app')
)
