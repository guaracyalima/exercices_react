import React, { Component } from 'react'

export default class ClassComponent extends Component {

  // e obrigarorio existir pelomenos uma funcao

  constructor(props){
    super(props)
    this.state = { value: props.initialValue }
  }

  sum(delta){
    //pra apenas um valor
      // this.setState({
      //   value: this.state.value + delta
      // })

      //pra mais de um valor
      this.setState({
        ...this.state, value: this.state.value + delta
      })
  }

  render(){
    return (
      <div>
        <h1> { this.props.label } </h1>
        <h2>{ this.state.value }</h2>

        <button onClick={ () => this.sum(-1)}>Decrementar</button>
        <button onClick={ () => this.sum(1)}>Incrementar</button>
       </div>
    )
  }

}
