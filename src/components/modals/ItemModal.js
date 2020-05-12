import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class ItemModal extends React.Component {
  onClose = event => {
    this.props.onClose && this.props.onClose(event);
  };

  useItem = event => {
    this.props.IncreaseHP(this.props.item.recoverAmount)
    this.props.DeleteItem(this.props.inventoryIndex)
    console.log(this.props)
    this.onClose()
  }

  render() {

    const ItemModalDisplay = styled.div`
      transition: 0.1s all ease-in;
      top:-450px;
      left: -100px;
      position: relative;
      width: 300px;
      height: 450px;
      background: white;
      border: 1px solid #ccc;
      transition: 1.1s ease-out;
      box-shadow: 
        -2rem 2rem 2rem rgba(black, 0.2);
      filter: blur(0);
      transform: scale(1);  
      border-radius: 10px;
      border: 5px solid blue;
      :hover{
        border: 5px solid yellow;
      }
    `

    const Anchor = styled.div`
      position: relative;
    `

    const CloseButton = styled.p`
      text-align: right;
      margin-top: 2px;
      margin-right: 7px;
      padding-left: 3px;
      padding-bottom: 3px;
      cursor: pointer;

    `

    const ItemImage = styled.img`
      max-height: 150px;
      max-width: 150px;
      border: 1px solid grey;
      padding: 10px;
    `

    if (!this.props.show) {
      return null;
    }
    return (
      <Anchor >
        <ItemModalDisplay id="modal">
          <CloseButton onClick={this.onClose} onMouseOut={this.onClose}>Close</CloseButton>
          <h2>{this.props.item.name}</h2>
          <ItemImage src={'./' + this.props.item.image + '.png'}></ItemImage>
          <p>{this.props.item.flavor}</p>
          <p>{this.props.item.effectDescription}</p>
          <button onClick={this.useItem}>Use</button>
        </ItemModalDisplay>
      </Anchor>
    );
  }
}


const mapStateToProps = (state) => ({status: state.status});

const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    DeleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index: index }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);