import React from 'react';
import styled from 'styled-components'

function FieldCardDisplay(props){

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
  return (
    <StyledFieldCard>
      <p>{props.card.name}</p>
      <p>{props.card.type}</p>
      <CardImage src={'./' + props.card.image + '.png'}></CardImage>
      <p>{props.card.flavor}</p>
    </StyledFieldCard>
  )
}

export default FieldCardDisplay;