import React from 'react'

//em aerofunctions o retunr é implicito (automatico dentro dos parenteses)
//props são as propriedades do componente

const Primeiro = props => (
    <h1>Primeiro componente</h1>
    )

const Segundo = props => (
    <h1>Segundo componte</h1>
)

export { Primeiro, Segundo }