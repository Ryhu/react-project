import React, { Component } from 'react';
import styled from 'styled-components'
import InventorySlot from './InventorySlot.js'
import { connect } from 'react-redux'; 

class Inventory extends Component {
  render() {
    return (
      <InventoryDisplay>
        <BackpackDisplay>
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
        </BackpackDisplay>
        <BackpackDisplay>
          <BackgroundImage src="./backpack.png"/>
          <Row>
            <InventorySlot item={this.props.inventory.backpack[10-1]} inventoryIndex='10' />
            <InventorySlot item={this.props.inventory.backpack[11-1]} inventoryIndex='11' />
            <InventorySlot item={this.props.inventory.backpack[12-1]} inventoryIndex='12' />
          </Row>
          <Row>
            <InventorySlot item={this.props.inventory.backpack[13-1]} inventoryIndex='13' />
            <InventorySlot item={this.props.inventory.backpack[14-1]} inventoryIndex='14' />
            <InventorySlot item={this.props.inventory.backpack[15-1]} inventoryIndex='15' />
          </Row>
          <Row>
            <InventorySlot item={this.props.inventory.backpack[16-1]} inventoryIndex='16' />
            <InventorySlot item={this.props.inventory.backpack[17-1]} inventoryIndex='17' />
            <InventorySlot item={this.props.inventory.backpack[18-1]} inventoryIndex='18' />
          </Row>
        </BackpackDisplay>
      </InventoryDisplay>
    )
  }
}

const BackgroundImage = styled.img`
  position: absolute;
  opacity: 0.5;
  height: 16rem;
  max-width: 16rem;
  z-index: -1
`
const Row = styled.div`
  display: flex;
  div{
    margin: 5px;
  }
`
const BackpackDisplay = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  div{
    margin: 5px;
  }
`
const InventoryDisplay = styled.div`
  float: right;
`

const mapStateToProps = (state) => ({inventory: state.inventory});
 
export default connect(mapStateToProps)(Inventory);
