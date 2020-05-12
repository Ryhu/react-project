import React, { Component } from 'react';
import styled from 'styled-components';
import ItemModal from './modals/ItemModal';


class InventorySlot extends Component {

  constructor(){
    super()

    this.state = {
      show: false
    }
  }

  showModal = event => {
    if(this.props.item){
      this.setState({
        show: !this.state.show,
      });
    }
  };

  render() {
    return (
      <InventorySlotDisplay>
        <ItemImage  
          onClick={e => { this.showModal(e) }} 
          src={this.props.item ? './' + this.props.item.image + '.png' : ''}>
        </ItemImage>
        <ItemModal 
          show={this.state.show} 
          item={this.props.item} 
          onClose={this.showModal} 
          inventoryIndex={this.props.inventoryIndex} 
        />
      </InventorySlotDisplay>
    )
  }
}

const InventorySlotDisplay = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  div{
    margin: 5px;
  }
  border: 2px solid grey;
`

const ItemImage = styled.img`
  padding: 10px;
  max-height: 80px;
  max-width: 80px;
`

export default InventorySlot
