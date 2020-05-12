import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import styled from 'styled-components'

class FieldCard extends Component {
  getItem = () => {
    this.props.GetItem(this.props.card.itemIndex)
  }

  render() {
    return (
      <StyledFieldCard>
        <p>{this.props.card.name}</p>
        <p>{this.props.card.type}</p>
        <CardImage src={'./' + this.props.card.image + '.png'}></CardImage>
        <p>{this.props.card.flavor}</p>
        { this.props.card.type == 'item'
          ? <ItemPickupButton onClick={this.getItem}>Pick Up</ItemPickupButton>
          : null }
      </StyledFieldCard>
    )
  }
}

const ItemPickupButton = styled.button`
  background-color: red;
`
const StyledFieldCard = styled.div`
  background-color: red;
  width: 300px;
  height: 400px;
  padding: 10px;
`
const CardImage = styled.img`
  max-height: 200px;
  max-width: 200px;
  border: 1px solid grey;
  padding: 10px;
`

const mapStateToProps = (state) => ({status: state.status});

const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    GetItem: (itemIndex) => dispatch({ type: 'GET_ITEM', itemIndex: itemIndex }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FieldCard);