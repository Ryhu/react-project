import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

const EventModal = (props) => {

  const buttonEffect = (button) => {
    button.effects.forEach(effect => {
      props[effect[0]](...effect.slice(1))
    })
  }
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
    background-image: url(${props.dungeonBackgroundImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  `
  let event = props.fields.event;

  return (
    <EventModalDisplay>
      <EventContainer>
        {event != null && 
          <>
          <h2>{event.title}</h2>
          <Text>{event.text}</Text>
          { event.buttons.map(button => (
            <Button onClick={() => buttonEffect(button)}>{button.name}</Button>
          ))}
          </>
        }
      </EventContainer>
    </EventModalDisplay>
  );
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
    ChangeRoom: (roomIndex) => dispatch({ type: 'CHANGE_ROOM', roomIndex: roomIndex }),
    ExitDungeon: (townIndex) => dispatch({ type: 'EXIT_DUNGEON', townIndex: townIndex }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EventModal);