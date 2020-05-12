import React, { Component } from 'react';
import FieldCard from './FieldCard.js'
import styled from 'styled-components'

class Field extends Component {
  render() {
    let card1 = {
      name: 'apple',
      type: 'item',
      image: 'apple',
      flavor: 'just an apple lying on the ground',
      itemIndex: 'Apple'
    }
    let card2 = {
      name: 'potion',
      type: 'item',
      image: 'potion',
      flavor: 'just a potion lying on the ground',
      itemIndex: 'Potion'
    }
    let card3 = {
      name: 'bread',
      type: 'item',
      image: 'bread',
      flavor: 'just a bread lying on the ground',
      itemIndex: 'Bread'
    }

    return (
      <FieldDisplay className="Display">
        <FieldCard card={card1} />
        <FieldCard card={card2} />
        <FieldCard card={card3} />
      </FieldDisplay>
    )
  }
}

const FieldDisplay = styled.div`
  display: flex;
  div{
    margin: 5px;
  }
`

export default Field
