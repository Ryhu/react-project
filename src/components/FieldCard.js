import React, { Component } from 'react';
import styled from 'styled-components'

class FieldCard extends Component {
  render() {
    return (
      <StyledFieldCard>
        <p>{this.props.card.name}</p>
        <p>{this.props.card.type}</p>
        <CardImage src={'./' + this.props.card.image + '.png'}></CardImage>
        <p>{this.props.card.flavor}</p>
      </StyledFieldCard>
    )
  }
}

const StyledFieldCard = styled.div`
  background-color: red;
  width: 300px;
  height: 400px;
  padding: 10px;
`
const CardImage = styled.img`
  max-height: 200px;
  max-width: 200px;
  border: 1px solid grey;
  padding: 10px;
`

export default FieldCard