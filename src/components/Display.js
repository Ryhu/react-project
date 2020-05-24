import React, { Component } from 'react';
import Field from './Field.js'
import Town from './Town.js'
import Inventory from './Inventory.js'
import StatusBar from './StatusBar.js'
import EventModal from './modals/EventModal.js'
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class Display extends Component {
  render() {
    return (
      <DisplayContainer >
        {this.props.fields.event !== null
          ? <EventModal dungeonBackgroundImage={this.props.fields.dungeon.backgroundImage}/>
          : <>
              { this.props.system.mode === 'dungeon' 
                ? <Field dungeonBackgroundImage={this.props.fields.dungeon.backgroundImage}/>
                : <Town /> }
            </>
        }
        <InventoryAndStatus className="invstatus">
          <StatusBar />
          <Inventory />
        </InventoryAndStatus>
      </DisplayContainer>
    )
  }
}

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
`

const InventoryAndStatus = styled.div`
  width: 30%;
  display: absolute;
  float: right;
`

const mapStateToProps = (state) => ({fields: state.fields, system: state.system,});

export default connect(mapStateToProps)(Display);