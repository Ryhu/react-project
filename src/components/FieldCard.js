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
      ? <StyledFieldCard onClick={() => {this.props.TriggerEvent(this.props.card.event, this.props.fieldIndex)}}>
          <p>{this.props.card.name}</p>
          <p>{this.props.card.type}</p>
          <CardImage src={'./' + this.props.card.image + '.png'}></CardImage>
          <p>{this.props.card.flavor}</p>
          { this.props.card.type === 'item'
            ? <ItemPickupButton onClick={this.getItem}>Pick Up</ItemPickupButton>
            : null }
        </StyledFieldCard>
      : <EmptyCard></EmptyCard>
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
  border-radius: 1rem;
`
const EmptyCard = styled.div`
  display: none;
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  // background-image: url('./card_back.png');
  // width: 240px;
  // height: 300px;
  // padding: 10px;
`
const CardImage = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid grey;
  padding: 10px;
`

const mapStateToProps = (state) => ({status: state.status});

const mapDispatchToProps = dispatch => {
  return {
    DeleteField: (fieldIndex) => dispatch({ type: 'DELETE_FIELD', fieldIndex: fieldIndex }),
    GetItem: (itemIndex) => dispatch({ type: 'GET_ITEM', itemIndex: itemIndex }),
    TriggerEvent: (event, fieldIndex) => dispatch({ type: 'TRIGGER_EVENT', event: event, fieldIndex: fieldIndex }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FieldCard);