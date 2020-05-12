import React, { Component } from 'react';
import styled from 'styled-components'
import InventorySlot from './InventorySlot.js'
import { connect } from 'react-redux'; 

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
      flavor: 'a ripe, juicy apple',
      recoverAmount: 10,
    }
    let item2 = {
      name: 'Potion',
      type: 'item',
      image: 'potion',
      flavor: 'a potion made of red herbs',
      recoverAmount: 50,
    }
    let item3 = {
      name: 'Bread',
      type: 'item',
      image: 'bread',
      flavor: 'made of bread.',
      recoverAmount: 20,
    }

    return (
      <InventoryDisplay>
        <BackgroundImage src="./backpack.png"/>
        <Row>
          <InventorySlot item={this.props.inventory.backpack[1-1]} inventoryIndex='1' />
          <InventorySlot item={this.props.inventory.backpack[2-1]} inventoryIndex='2' />
          <InventorySlot item={this.props.inventory.backpack[3-1]} inventoryIndex='3' />
        </Row>
        <Row>
          <InventorySlot item={this.props.inventory.backpack[4-1]} inventoryIndex='4' />
          <InventorySlot item={this.props.inventory.backpack[5-1]} inventoryIndex='5' />
          <InventorySlot item={this.props.inventory.backpack[6-1]} inventoryIndex='6' />
        </Row>
        <Row>
          <InventorySlot item={this.props.inventory.backpack[7-1]} inventoryIndex='7' />
          <InventorySlot item={this.props.inventory.backpack[8-1]} inventoryIndex='8' />
          <InventorySlot item={this.props.inventory.backpack[9-1]} inventoryIndex='9' />
        </Row>
      </InventoryDisplay>
    )
  }
}


const mapStateToProps = (state) => ({inventory: state.inventory});
 
export default connect(mapStateToProps)(Inventory);
