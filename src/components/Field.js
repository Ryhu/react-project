import React from 'react';
import FieldCard from './FieldCard.js'
import styled from 'styled-components'
import { connect } from 'react-redux'; 

const Field = (props) => {
  const FieldDisplay = styled.div`
    width: 60%;
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
      margin: 5px;
    }
    background-image: url(${props.dungeonBackgroundImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  `
  return (
    <FieldDisplay className="Display">
      <FieldCard card={props.fields.leftField[0]} fieldIndex='leftField'/>
      <FieldCard card={props.fields.centerField[0]} fieldIndex='centerField'/>
      <FieldCard card={props.fields.rightField[0]} fieldIndex='rightField'/>
    </FieldDisplay>
  )
}

const mapStateToProps = (state) => ({fields: state.fields});
 
export default connect(mapStateToProps)(Field);