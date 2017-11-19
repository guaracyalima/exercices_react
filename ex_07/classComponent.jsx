import React, { Component } from 'react'

export default class ClassComponent extends Component {

  // e obrigarorio existir pelomenos uma funcao

  render(){
    return (
      <h1> { this.props.value } </h1>
    )
  }

}
