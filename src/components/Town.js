import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux'; 

class Town extends React.Component {
  // in town, you can:
  // buy/sell
  // talk to townspeople
  // take quests
  // leave town

  render() {
    let town = this.props.town.town;
    return (
      <TownDisplay>
        <h2>{town.name}</h2>
        {this.props.town.activeLocation === 'townSquare' && 
          <>
          <h2>Town Square</h2>
          <Options>
            <Row>
              <OptionBlock onClick={() => this.props.SetLocation('shop')}>shop</OptionBlock>
              <OptionBlock onClick={() => this.props.SetLocation('quests')}>quests</OptionBlock>
            </Row>
            <Row>
              <OptionBlock onClick={() => this.props.SetLocation('talk')}>talk</OptionBlock>
              <OptionBlock onClick={() => this.props.SetLocation('leave')}>leave</OptionBlock>
            </Row>
          </Options>
          </>
        }
        {this.props.town.activeLocation === 'shop' && 
          <>
          <h2>shop</h2>
          <BackButton onClick={() => this.props.SetLocation('townSquare')}>Back</BackButton>
          </>
        }
        {this.props.town.activeLocation === 'quests' && 
          <>
          <h2>quests</h2>
          <BackButton onClick={() => this.props.SetLocation('townSquare')}>Back</BackButton>
          </>
        }
        {this.props.town.activeLocation === 'talk' && 
          <>
          <h2>talk</h2>
          <BackButton onClick={() => this.props.SetLocation('townSquare')}>Back</BackButton>
          </>
        }
        {this.props.town.activeLocation === 'leave' && 
          <>
          <h2>leave</h2>
          <BackButton onClick={() => {
            this.props.SetLocation('townSquare')
            this.props.SetModeDungeon()
          }}>Yornewood</BackButton>
          <br />
          <br />
          <BackButton onClick={() => this.props.SetLocation('townSquare')}>Back</BackButton>
          </>
        }
      </TownDisplay>
    );
  }
}

const BackButton = styled.div`
  background-color: black;
  color: white;
  display: inline-block;
  padding: .3rem;
`
const Options = styled.div`
  display: inline-block;
`
const Row = styled.div`
  display: flex;
  div{
    margin: 5px;
  }
`
const OptionBlock = styled.div`
  display: inline-block;
  height: 100px;
  width: 100px;
  background-color: black;
  color: white;
`
const TownDisplay = styled.div`
  height: 30rem;
  width: 60rem;
  background-color: green;
  width: 60%;
  font-size: 2rem;
`

const mapStateToProps = (state) => ({status: state.status, town: state.town});

const mapDispatchToProps = dispatch => {
  return {
    SetLocation: (location) => dispatch({ type: 'SET_LOCATION', location: location }),
    SetModeDungeon: () => dispatch({ type: "SET_MODE_DUNGEON" }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Town);