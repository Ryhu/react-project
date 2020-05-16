import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class EventModal extends React.Component {

  buttonEffect(button){
    button.effects.forEach(effect => {
      this.props[effect[0]](...effect.slice(1))
    })
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
    //           ['GetItem', 'Apple']
    //         ]
    //       },
    //       {
    //         name: 'Discard',
    //         effects: [
    //           ['EndEvent']
    let event = this.props.fields.event;
    return (
      <EventModalDisplay id="modal">
        {event != null && 
          <>
          <h2>{event.title}</h2>
          <Text>{event.text}</Text>
          { event.buttons.map(button => (
            <Button onClick={() => this.buttonEffect(button)}>{button.name}</Button>
          ))}
          </>
      }
      </EventModalDisplay>
    );
  }
}

const Text = styled.p`
  display: block;
`
const EventModalDisplay = styled.div`
  height: 30rem;
  width: 60rem;
  background-color: green;
  width: 60%;
  font-size: 2rem;
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

const mapStateToProps = (state) => ({status: state.status, fields: state.fields});

const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    IncreaseHunger: (amount) => dispatch({ type: 'INCREASE_HUNGER', amount: amount }),
    DecreaseHP: (amount) => dispatch({ type: 'DECREASE_HP', amount: amount }),
    DecreaseHunger: (amount) => dispatch({ type: 'DECREASE_HUNGER', amount: amount }),
    GetItem: (itemIndex) => dispatch({ type: 'GET_ITEM', itemIndex: itemIndex }),
    EndEvent: () => dispatch({ type: "END_EVENT" }),
    ContinueEvent: (eventIndex) => dispatch({ type: 'CONTINUE_EVENT', eventIndex: eventIndex }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EventModal);