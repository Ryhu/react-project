import React, { Component } from 'react';
import styled from 'styled-components';
import ItemModal from './modals/ItemModal';
import { connect } from 'react-redux'; 
import { CSSTransition } from "react-transition-group";


class InventorySlot extends Component {

  constructor(){
    super()

    this.state = {
      show: false
    }
  }

  startDrag = event => {
    this.props.DragStart({ inventoryIndex: this.props.inventoryIndex, item: this.props.item })
    this.props.RemoveActiveItem()
  }

  dragOver = event => {
    event.preventDefault();
  }

  dropped = event => {
    event.preventDefault()
    if (this.props.system.dragItem) {
      this.props.SwapItems(this.props.inventoryIndex-1, this.props.system.dragItem.inventoryIndex-1)
      this.props.DragEnd()
    }
  }

  showModal = event => {
    if(this.props.item){
      this.setState({
        show: !this.state.show,
      });
      this.props.inventory.activeIndex === this.props.inventoryIndex 
        ? this.props.SetActiveItem(null)
        : this.props.SetActiveItem(this.props.inventoryIndex)
    }
  };

  render() {
    return (
      <InventorySlotDisplay
        onDrop={this.dropped}
        onDragOver={this.dragOver}
        onClick={e => { this.showModal(e) }} >
        <CSSTransition
          in={!!this.props.item}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <ItemImage  
            onDragStart={this.props.type === 'shop' ? null : this.startDrag}
            onDragEnd={this.props.DragEnd}
            className={this.props.item ? '' : 'hidden'}
            src={this.props.item ? './' + this.props.item.image + '.png' : null}>
          </ItemImage> 
        </CSSTransition>
        <CSSTransition
          in={this.props.inventory.activeIndex === this.props.inventoryIndex}
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
              type={this.props.type || null}
            /> 
          </Anchor>
        </CSSTransition>
      </InventorySlotDisplay>
    )
  }
}

const InventorySlotDisplay = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  border: 2px solid grey;
`
const ItemImage = styled.img`
height: 3.5rem;
width: 3.5rem;
padding: .25rem;
position: relative;
  &.fade-enter {
    top: -40px;
    opacity: 0;
    transform: scale(0.9);
  }

  &.fade-enter-active {
    opacity: 1;
    top: 0px;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms, top 300ms;
  }

  &.hidden{
    visibility: hidden;
  }
`
const Anchor = styled.div`
position: relative;
  width: 1px;
  height: 1px;
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
  z-index: 4;
`

const mapStateToProps = (state) => ({inventory: state.inventory, system: state.system});
const mapDispatchToProps = dispatch => {
  return {
    SetActiveItem: (inventoryIndex) => dispatch({ type: 'SET_ACTIVE_ITEM', inventoryIndex: inventoryIndex }),
    SwapItems: (inventoryIndex1, inventoryIndex2) => dispatch({ type: 'SWAP_ITEMS', inventoryIndex1: inventoryIndex1, inventoryIndex2: inventoryIndex2}),
    DragStart: (item) => dispatch({ type: 'DRAG_START', item: item }),
    DragEnd: () => dispatch({ type: 'DRAG_END' }),
    RemoveActiveItem: () => dispatch({ type: 'REMOVE_ACTIVE_ITEM' }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(InventorySlot);