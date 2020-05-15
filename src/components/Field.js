import React, { Component } from 'react';
import FieldCard from './FieldCard.js'
import styled from 'styled-components'
import { connect } from 'react-redux'; 

class Field extends Component {
  componentDidMount(){
    this.props.RandomizedSetup(5)
  }
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
  display: flex;
  div{
    margin: 5px;
  }
`

const mapStateToProps = (state) => ({fields: state.fields});

const mapDispatchToProps = dispatch => {
  return {
    RandomizedSetup: (amount) => dispatch({ type: 'RANDOMIZED_SETUP', amount: amount }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Field);