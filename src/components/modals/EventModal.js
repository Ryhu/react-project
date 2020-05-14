import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class EventModal extends React.Component {
  onClose = event => {
    this.props.onClose && this.props.onClose(event);
  };

  useItem = event => {
    this.onClose()
    if(this.props.item.HPUp){
      this.props.IncreaseHP(this.props.item.HPUp)
    }
    if(this.props.item.HungerUp){
      this.props.IncreaseHunger(this.props.item.HungerUp)
    }
    this.props.DeleteItem(this.props.inventoryIndex)
  }
  discardItem = event => {
    this.onClose()
    this.props.DeleteItem(this.props.inventoryIndex)
  }

  render() {
    // const EventModalDisplay = styled.div`
    //   top: -27rem;
    //   left: -100px;
    //   position: relative;
    //   width: 18rem;
    //   height: 25rem;
    //   background: ${this.props.item ? colorDictionary[this.props.item.type] : 'white'};
    //   border: 1px solid #ccc;
    //   box-shadow: 
    //     -2rem 2rem 2rem rgba(black, 0.2);
    //   filter: blur(0);
    //   border-radius: 10px;
    //   border: 5px solid blue;
    // `
    return (
      <EventModalDisplay id="modal">
        {/* {this.props.item 
          ? <><CloseButton onClick={this.onClose} onMouseOut={this.onClose}>Close</CloseButton>
          <h2>{this.props.item.name}</h2>
          <ItemImage src={'./' + this.props.item.image + '.png'}></ItemImage>
          <p>{this.props.item.flavor}</p>
          <p>{this.props.item.effectDescription}</p>
          {this.props.item.type == 'consumable' ? <UseButton onClick={this.useItem}>Use</UseButton> : null }
          <DiscardButton onClick={this.discardItem}>Discard</DiscardButton></>
          : null
      } */}
      </EventModalDisplay>
    );
  }
}

const EventModalDisplay = styled.div`
  height: 20rem;
  width: 60rem;
  background-color: black;
`
const DiscardButton = styled.button`
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

const mapStateToProps = (state) => ({status: state.status});

const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    IncreaseHunger: (amount) => dispatch({ type: 'INCREASE_HUNGER', amount: amount }),
    DeleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index: index }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EventModal);