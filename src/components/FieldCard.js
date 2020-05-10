import React, { Component } from 'react';
import FieldCardDisplay from './FieldCardDisplay.js'
import styled from 'styled-components'

class FieldCard extends Component {

  constructor(){
    super()

    this.state = {
      
    }
  }

  render() {
    alert(this.props.card)
    return (
      <FieldCardDisplay card={this.props.card} />
    )
  }
}

export default FieldCard
