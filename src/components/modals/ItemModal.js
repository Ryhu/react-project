import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class ItemModal extends React.Component {
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
    const ItemModalDisplay = styled.div`
      top: -16rem;
      left: -23rem;;
      position: relative;
      width: 18rem;
      height: 25rem;
      background: ${this.props.item ? colorDictionary[this.props.item.type] : 'white'};
      border: 1px solid #ccc;
      box-shadow: 
        -2rem 2rem 2rem rgba(black, 0.2);
      filter: blur(0);
      border-radius: 10px;
      border: 5px solid blue;
      z-index: 10;
    `
    return (
      <ItemModalDisplay id="modal">
        {this.props.item 
          && <><CloseButton onClick={this.onClose} onMouseOut={this.onClose}>Close</CloseButton>
          <h2>{this.props.item.name}</h2>
          <ItemImage src={'./' + this.props.item.image + '.png'}></ItemImage>
          <EffectsDiv>
            {this.props.item.HPUp && <IconSpan>{this.props.item.HPUp}<Icon src='./heart.png'></Icon></IconSpan>}
            {this.props.item.HungerUp && <IconSpan>{this.props.item.HungerUp}<Icon src='./apple.png'></Icon></IconSpan>}
            {this.props.item.gold && <IconSpan>{this.props.item.gold}<Icon src='./coins.png'></Icon></IconSpan>}
          </EffectsDiv>
          <p>{this.props.item.flavor}</p>
          {this.props.item.type == 'consumable' && <UseButton onClick={this.useItem}>Use</UseButton>}
          <DiscardButton onClick={this.discardItem}>Discard</DiscardButton></>
        }
      </ItemModalDisplay>
    );
  }
}

const colorDictionary = {
  'consumable': '#ccffcc',
  'crafting': '#ffefcc'
}
const EffectsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const IconSpan = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
`
const Icon = styled.img`
  height: 1.1rem;
  width: 1.1rem;
  margin-right: .3rem;
`
const CloseButton = styled.p`
  text-align: right;
  margin-top: 2px;
  margin-right: 7px;
  padding-left: 3px;
  padding-bottom: 3px;
  cursor: pointer;
`
const UseButton = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
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
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);