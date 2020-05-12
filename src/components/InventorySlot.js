import React, { Component } from 'react';
import styled from 'styled-components';
import ItemModal from './modals/ItemModal';
import { CSSTransition } from "react-transition-group";


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
        <CSSTransition
          in={this.props.item}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <ItemImage  
            onClick={e => { this.showModal(e) }} 
            className={this.props.item ? '' : 'hidden'}
            src={this.props.item ? './' + this.props.item.image + '.png' : null}>
          </ItemImage> 
        </CSSTransition>
        <CSSTransition
          in={this.state.show}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Anchor>
            <ItemModal 
              show={this.state.show} 
              item={this.props.item} 
              onClose={this.showModal} 
              inventoryIndex={this.props.inventoryIndex} 
            /> 
          </Anchor>
        </CSSTransition>
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
  height: 80px;
  width: 80px;
  padding: 10px;
  &.fade-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  &.hidden{
    visibility: hidden;
  }
`
const Anchor = styled.div`
  position: relative;
  &.fade-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  &.fade-exit {
    opacity: 1;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }
`

export default InventorySlot
