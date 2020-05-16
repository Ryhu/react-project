import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class EventModal extends React.Component {
  onClose = event => {
    this.props.onClose && this.props.onClose(event);
  };

  useItem = () => {
    this.onClose()
    if(this.props.item.HPUp){
      this.props.IncreaseHP(this.props.item.HPUp)
    }
    if(this.props.item.HungerUp){
      this.props.IncreaseHunger(this.props.item.HungerUp)
    }
    this.props.DeleteItem(this.props.inventoryIndex)
  }
  discardItem(){
    this.onClose()
    this.props.DeleteItem(this.props.inventoryIndex)
  }

  render() {

    //   event: {
    //     title: 'An Apple',
    //     image: 'apple',
    //     text: 'You come across an apple on the ground!',
    //     buttons: [
    //       {
    //         name: 'Take',
    //         effects: [
    //           ['GetItem', 'apple']
    //         ]
    //       },
    //       {
    //         name: 'Discard',
    //         effects: [
    //           ['EndEvent']

    return (
      <EventModalDisplay id="modal">
        {this.props.system.event != null && 
          <>
          <h2>{this.props.system.event.name}</h2>
          <p>{this.props.system.event.flavor}</p>
          <p>{this.props.system.event.effectDescription}</p>
          {this.props.system.event.type === 'consumable' ? <Button onClick={this.useItem}>Use</Button> : null }
          <Button onClick={this.discardItem}>Discard</Button>
          </>
      }
      </EventModalDisplay>
    );
  }
}

const EventModalDisplay = styled.div`
  height: 20rem;
  width: 60rem;
  background-color: green;
  width: 60%;
`
const Button = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
`
const ItemImage = styled.img`
  max-height: 120px;
  max-width: 120px;
  border: 1px solid grey;
  padding: 10px;
`

const mapStateToProps = (state) => ({status: state.status, system: state.system});

const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    IncreaseHunger: (amount) => dispatch({ type: 'INCREASE_HUNGER', amount: amount }),
    DeleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index: index }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EventModal);