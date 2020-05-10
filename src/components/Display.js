import React, { Component } from 'react';
import Field from './Field.js'
import Inventory from './Inventory.js'
import StatusBar from './StatusBar.js'

class Display extends Component {

  constructor(){
    super()

    this.state = {
      status: {
        HP: 50,
        HPMax: 200,
      },
    }
  }

  render() {
    return (
      <div className="Display">
        <Field />
        <StatusBar status={this.state.status} />
        <Inventory />
      </div>
    )
  }
}

export default Display
