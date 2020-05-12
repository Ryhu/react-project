import React, { Component } from 'react';
import FieldCard from './FieldCard.js'
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class Field extends Component {
  render(){
    return (
      <FieldDisplay className="Display">
        <FieldCard card={this.props.fields.leftField[0]} />
        <FieldCard card={this.props.fields.centerField[0]} />
        <FieldCard card={this.props.fields.rightField[0]} />
      </FieldDisplay>
    )
  }
}

const FieldDisplay = styled.div`
  display: flex;
  div{
    margin: 5px;
  }
`

const mapStateToProps = (state) => ({fields: state.fields});
 
export default connect(mapStateToProps)(Field);