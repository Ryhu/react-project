import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import styled from 'styled-components'

class FieldCard extends Component {
  getItem = () => {
    this.props.GetItem(this.props.card.itemIndex)
    this.props.DeleteField(this.props.fieldIndex)
  }



  render() {
    return (
      this.props.card 
      ? <StyledFieldCard onClick={() => {this.props.TriggerEvent(this.props.card)}}>
          <p>{this.props.card.name}</p>
          <p>{this.props.card.type}</p>
          <CardImage src={'./' + this.props.card.image + '.png'}></CardImage>
          <p>{this.props.card.flavor}</p>
          { this.props.card.type == 'item'
            ? <ItemPickupButton onClick={this.getItem}>Pick Up</ItemPickupButton>
            : null }
        </StyledFieldCard>
      : <StyledFieldCard></StyledFieldCard>
    )
  }
}

const ItemPickupButton = styled.button`
  background-color: red;
`
const StyledFieldCard = styled.div`
  background-color: red;
  width: 240px;
  height: 300px;
  padding: 10px;
`
const CardImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  border: 1px solid grey;
  padding: 10px;
`

const mapStateToProps = (state) => ({status: state.status});

const mapDispatchToProps = dispatch => {
  return {
    DeleteField: (fieldIndex) => dispatch({ type: 'DELETE_FIELD', fieldIndex: fieldIndex }),
    GetItem: (itemIndex) => dispatch({ type: 'GET_ITEM', itemIndex: itemIndex }),
    TriggerEvent: (event) => dispatch({ type: 'TRIGGER_EVENT', event: event }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FieldCard);