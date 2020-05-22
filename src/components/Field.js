import React, { Component } from 'react';
import FieldCard from './FieldCard.js'
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class Field extends Component {
  render(){
    return (
      <FieldDisplay className="Display">
        <FieldCard card={this.props.fields.leftField[0]} fieldIndex='leftField'/>
        <FieldCard card={this.props.fields.centerField[0]} fieldIndex='centerField'/>
        <FieldCard card={this.props.fields.rightField[0]} fieldIndex='rightField'/>
      </FieldDisplay>
    )
  }
}

const FieldDisplay = styled.div`
  width: 60%;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    margin: 5px;
  }
  background-image: url('./forest_background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const mapStateToProps = (state) => ({fields: state.fields});
 
export default connect(mapStateToProps)(Field);