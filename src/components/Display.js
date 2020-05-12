import React, { Component } from 'react';
import Field from './Field.js'
import Inventory from './Inventory.js'
import StatusBar from './StatusBar.js'

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <Field />
        <StatusBar />
        <Inventory />
      </div>
    )
  }
}

export default Display
