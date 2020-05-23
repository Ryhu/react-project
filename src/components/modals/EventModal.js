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
    let backgroundURL = '';
    return (
      <EventModalDisplay>
        <EventContainer>
          {event != null && 
            <>
            <h2>{event.title}</h2>
            <Text>{event.text}</Text>
            { event.buttons.map(button => (
              <Button onClick={() => this.buttonEffect(button)}>{button.name}</Button>
            ))}
            </>
          }
        </EventContainer>
      </EventModalDisplay>
    );
  }
}

const EventContainer = styled.div`
  display: block;
  background-color: green;
  border: 1px solid yellow;
  border-radius: 1rem;
  padding: 1rem;
`
const Text = styled.p`
  display: block;
`
const EventModalDisplay = styled.div`
  height: 50rem;
  width: 60%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  box-sizing: border-box;
  background-image: url('./forest_background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
const Button = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
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
    SetModeDungeon: () => dispatch({ type: "SET_MODE_DUNGEON" }),
    SetModeTown: () => dispatch({ type: "SET_MODE_TOWN" }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EventModal);