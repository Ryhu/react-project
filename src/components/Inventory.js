import React, { Component } from 'react';
import styled from 'styled-components'
import InventorySlot from './InventorySlot.js'

class Inventory extends Component {

  constructor(){
    super()

    this.state = {
      
    }
  }

  render() {

    const BackgroundImage = styled.img`
      position: absolute;
      opacity: 0.5;
      height: 400px;
      max-width: 400px;
      z-index: 1;
    `

    const Row = styled.div`
      display: flex;
      div{
        margin: 5px;
      }
      z-index: 2;
    `

    const InventoryDisplay = styled.div`
      background-color: green;
      padding: 10px;
      max-width: 360px;

      display: flex;
      flex-direction: column;
      div{
        margin: 5px;
      }
    `

    let item1 = {
      name: 'Apple',
      type: 'item',
      image: 'apple',
      flavor: 'a ripe, juicy apple'
    }
    let item2 = {
      name: 'Potion',
      type: 'item',
      image: 'potion',
      flavor: 'a potion made of red herbs'
    }
    let item3 = {
      name: 'Bread',
      type: 'item',
      image: 'bread',
      flavor: 'made of bread.'
    }

    return (
      <InventoryDisplay>
        <BackgroundImage src="./backpack.png"/>
        <Row>
          <InventorySlot item={item1}/>
          <InventorySlot item={item2}/>
          <InventorySlot item={item3}/>
        </Row>
        <Row>
          <InventorySlot item={item1}/>
          <InventorySlot item={item1}/>
          <InventorySlot />
        </Row>
        <Row>
          <InventorySlot item={item1}/>
          <InventorySlot />
          <InventorySlot />
        </Row>
      </InventoryDisplay>
    )
  }
}

export default Inventory
