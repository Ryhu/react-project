import React, { Component } from 'react';
import Field from './Field.js'
import Inventory from './Inventory.js'
import StatusBar from './StatusBar.js'
import EventModal from './modals/EventModal.js'
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class Display extends Component {
  render() {
    console.log(this.props)
    return (
      <DisplayContainer >
          <Field />
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
`

const InventoryAndStatus = styled.div`
  width: 30%;
  display: absolute;
  float: right;
`

const mapStateToProps = (state) => ({system: state.system});
 
export default connect(mapStateToProps)(Display);