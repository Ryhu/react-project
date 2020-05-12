import React, { Component } from 'react';
import styled from 'styled-components'
import InventorySlot from './InventorySlot.js'
import { connect } from 'react-redux'; 

class Inventory extends Component {
  render() {
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

const BackgroundImage = styled.img`
  position: absolute;
  opacity: 0.5;
  height: 16rem;
  max-width: 16rem;
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
  padding: 1rem;
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  div{
    margin: 5px;
  }
`

const mapStateToProps = (state) => ({inventory: state.inventory});
 
export default connect(mapStateToProps)(Inventory);
