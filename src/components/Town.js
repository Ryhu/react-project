import React from "react";
import styled from 'styled-components';
import InventorySlot from './InventorySlot.js'
import items from '../data/items'
import { connect } from 'react-redux'; 

class Town extends React.Component {
  // in town, you can:
  // buy/sell
  // talk to townspeople
  // take quests
  // leave town

  // name: 'Yorne',
  //   backgroundImage: '',
  //   shop: {
  //     supply: ['apple', 'bread'],
  //     demand: [],
  //   },
  //   exits: ['Yornewood'],
  //   villagers:[],
  //   quests: [],

  dragOver = event => {
    event.preventDefault();
  }

  dropped = event => {
    event.preventDefault()
    if (this.props.system.dragItem) {
      this.props.DeleteItem(this.props.system.dragItem.inventoryIndex)
      this.props.IncreaseCoins(this.props.system.dragItem.item.gold)
      this.props.DragEnd()
      event.stopPropagation()
    }
  }

  render() {
    let town = this.props.town.town;
    return (
      <TownDisplay>
        <TownContainer>
        <h2>{town.name}</h2>
        {this.props.town.activeLocation === 'townSquare' && 
          <>
          <h2>Town Square</h2>
          <Options>
            <Row>
              <OptionBlock onClick={() => this.props.SetLocation('shop')}>shop</OptionBlock>
              {/* <OptionBlock onClick={() => this.props.SetLocation('quests')}>quests</OptionBlock> */}
            </Row>
            <Row>
              {/* <OptionBlock onClick={() => this.props.SetLocation('talk')}>talk</OptionBlock> */}
              <OptionBlock onClick={() => this.props.SetLocation('leave')}>leave</OptionBlock>
            </Row>
          </Options>
          </>
        }
        {this.props.town.activeLocation === 'shop' && 
          <Shop>
          <h2>shop</h2>
          <ShopInventory
            onDrop={this.dropped}
            onDragOver={this.dragOver}
          >
            {town.shop.supply.map((itemIndex, index) => (
              <InventorySlot item={items[itemIndex]} type='shop' inventoryIndex={100 + index}></InventorySlot>
            ))}
          </ShopInventory>
          <BackButton onClick={() => this.props.SetLocation('townSquare')}>Back</BackButton>
          </Shop>
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
          <DungeonCard onClick={() => {
              this.props.SetLocation('townSquare')
              this.props.SetModeDungeon()
              this.props.EnterDungeon('Yornewood')
            }}>
            <BackButton>Yornewood</BackButton>
          </DungeonCard>
          <br />
          <br />
          <BackButton onClick={() => this.props.SetLocation('townSquare')}>Back</BackButton>
          </>
        }
        </TownContainer>
      </TownDisplay>
    );
  }
}

const DungeonCard = styled.div`
  height: 10rem;
  width: 15rem;
  background-image: url('./forest_background.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`
const TownContainer = styled.div`
  background-color: green;
  display: inline-block;
  width: 50%;
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid yellow;
`
const Shop = styled.div`
  margin-left: 30%;
  margin-right: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: green;
  border-radius: 1rem;
  padding: 1rem;
`
const ShopInventory = styled.div`
  display: flex;
  align-items: center;
  div:nth-child(n) {
    margin: .5rem;
  }
  border: 2px solid blue;
  border-radius: .7rem;
  padding: .5rem;
  margin-bottom: 1rem;
  background-color: #c68c53;
`
const BackButton = styled.div`
  background-color: black;
  color: white;
  display: inline-block;
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: 1rem;
`
const Options = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 6rem;
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
  border-radius: 1rem;
`
const TownDisplay = styled.div`
  padding-top: 20rem;
  height: 30rem;
  width: 60rem;
  background-color: green;
  width: 60%;
  background-image: url('./town1_background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const mapStateToProps = (state) => ({status: state.status, town: state.town, system: state.system});

const mapDispatchToProps = dispatch => {
  return {
    SetLocation: (location) => dispatch({ type: 'SET_LOCATION', location: location }),
    SetModeDungeon: () => dispatch({ type: "SET_MODE_DUNGEON" }),
    EnterDungeon: (location) => dispatch({ type: 'ENTER_DUNGEON', location: location }),
    DeleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index: index }),
    IncreaseCoins: (amount) => dispatch({ type: 'INCREASE_COINS', amount: amount }),
    DragEnd: () => dispatch({ type: 'DRAG_END' }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Town);