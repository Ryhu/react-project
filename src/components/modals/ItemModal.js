import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class ItemModal extends React.Component {
  onClose = event => {
    this.props.onClose && this.props.onClose(event);
  };

  useItem = event => {
    this.onClose()
    this.props.IncreaseHP(this.props.item.recoverAmount)
    this.props.DeleteItem(this.props.inventoryIndex)
  }

  render() {
    return (
      <ItemModalDisplay id="modal">
        {this.props.item 
          ? <><CloseButton onClick={this.onClose} onMouseOut={this.onClose}>Close</CloseButton>
          <h2>{this.props.item.name}</h2>
          <ItemImage src={'./' + this.props.item.image + '.png'}></ItemImage>
          <p>{this.props.item.flavor}</p>
          <p>{this.props.item.effectDescription}</p>
          <UseButton onClick={this.useItem}>Use</UseButton></>
          : null
      }
      </ItemModalDisplay>
    );
  }
}

const ItemModalDisplay = styled.div`
  top:-450px;
  left: -100px;
  position: relative;
  width: 300px;
  height: 450px;
  background: #ccffcc;
  border: 1px solid #ccc;
  box-shadow: 
    -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  border-radius: 10px;
  border: 5px solid blue;
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
const ItemImage = styled.img`
  max-height: 150px;
  max-width: 150px;
  border: 1px solid grey;
  padding: 10px;
`

const mapStateToProps = (state) => ({status: state.status});

const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    DeleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index: index }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);