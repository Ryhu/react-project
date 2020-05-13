import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class StatusBar extends Component {
  render() {
    const MovingHPBar = styled.div`
      background-color: red;
      width: ${Math.floor(parseFloat(this.props.status.HP) / this.props.status.HPMax * 100) }%;
      height: 50px;
      position: absolute;
      border-radius: 7px;
      z-index: 2;
    `    
    const MovingHungerBar = styled.div`
      background-color: orange;
      width: ${Math.floor(parseFloat(this.props.status.Hunger) / this.props.status.HungerMax * 100) }%;
      height: 50px;
      position: absolute;
      border-radius: 7px;
      z-index: 2;
    `
    

    return (
      <StatusContainer>
        <HPBar>
          <MovingHPBar></MovingHPBar>
          <HPBarText>{this.props.status.HP + '/' + this.props.status.HPMax}</HPBarText>
        </HPBar>
        <HungerBar>
          <MovingHungerBar></MovingHungerBar>
          <HungerBarText>{this.props.status.Hunger + '/' + this.props.status.HungerMax}</HungerBarText>
        </HungerBar>
      </StatusContainer>
    )
  }
}

const StatusContainer = styled.div`
  width: 80%;
  background-color: #ccffff;
  height: 100px;
  border-radius: 15px;
  border: 6px solid grey;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`

const HPBar = styled.div`
  background-color: black;
  margin: 20px;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 2rem;
  position: relative;
  z-index: 1
`
const HPBarText = styled.p` 
  -webkit-text-fill-color: white; 
  -webkit-text-stroke-width: .9px;
  -webkit-text-stroke-color: black;
  margin-top: 0;
  z-index: 3;
  position: relative;
  width: 100%;
  text-align: center;
`

const HungerBar = styled.div`
  background-color: black;
  margin: 20px;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 2rem;
  position: relative;
  z-index: 1
`
const HungerBarText = styled.p` 
  -webkit-text-fill-color: white; 
  -webkit-text-stroke-width: .9px;
  -webkit-text-stroke-color: black;
  margin-top: 0;
  z-index: 3;
  position: relative;
  width: 100%;
  text-align: center;
`
const mapStateToProps = (state) => ({status: state.status});
 
export default connect(mapStateToProps)(StatusBar);