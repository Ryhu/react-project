import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class StatusBar extends Component {
  dragOver = event => {
    event.preventDefault();
  }

  dropped = event => {
    event.preventDefault()
    if (this.props.system.dragItem && this.props.system.dragItem.item.type === 'consumable') {
      if(this.props.system.dragItem.item.HPUp){
        this.props.IncreaseHP(this.props.system.dragItem.item.HPUp)
      }
      if(this.props.system.dragItem.item.HungerUp){
        this.props.IncreaseHunger(this.props.system.dragItem.item.HungerUp)
      }
      this.props.DeleteItem(this.props.system.dragItem.inventoryIndex)
    }
  }

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
      <StatusContainer
        onDragOver={this.dragOver} 
        onDrop={this.dropped}>
        <HPBar>
          <MovingHPBar></MovingHPBar>
          <HPBarText>{'HP: ' + this.props.status.HP + '/' + this.props.status.HPMax}</HPBarText>
        </HPBar>
        <HungerBar>
          <MovingHungerBar></MovingHungerBar>
          <HungerBarText>{'Energy: ' + this.props.status.Hunger + '/' + this.props.status.HungerMax}</HungerBarText>
        </HungerBar>
        <CoinPouch>
          <CoinText>{this.props.status.Coins}</CoinText>
          <CoinImg src='./coins.png'></CoinImg>
        </CoinPouch>
      </StatusContainer>
    )
  }
}

const CoinPouch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 2rem;
`
const CoinText = styled.p`
  padding-right: .2rem;
  font-size: 1.5rem;
  font-weight: bold;
`
const CoinImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
`
const StatusContainer = styled.div`
  background-color: #ccffff;
  border-radius: 15px;
  border: 6px solid grey;
  width: 30rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const mapStateToProps = (state) => ({status: state.status, system: state.system});
const mapDispatchToProps = dispatch => {
  return {
    IncreaseHP: (amount) => dispatch({ type: 'INCREASE_HP', amount: amount }),
    IncreaseHunger: (amount) => dispatch({ type: 'INCREASE_HUNGER', amount: amount }),
    DeleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index: index }),
  };
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);