import React from "react";
import styled from 'styled-components';

export default class ItemModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {

    const ItemModalDisplay = styled.div`
      transition: 0.1s all ease-in;
      top:-450px;
      left: -100px;
      position: relative;
      width: 300px;
      height: 450px;
      background: white;
      border: 1px solid #ccc;
      transition: 1.1s ease-out;
      box-shadow: 
        -2rem 2rem 2rem rgba(black, 0.2);
      filter: blur(0);
      transform: scale(1);  
      border-radius: 10px;
      border: 5px solid blue;
      :hover{
        border: 5px solid yellow;
      }
    `

    const anchor = styled.div`
      position: relative;
    `

    const CloseButton = styled.p`
      text-align: right;
      margin-top: 2px;
      margin-right: 7px;
      padding-left: 3px;
      padding-bottom: 3px;
      cursor: pointer;

    `

    const ItemImage = styled.img`
      max-height: 150px;
      max-width: 150px;
      border: 1px solid grey;
      padding: 10px;
    `

    if (!this.props.show) {
      return null;
    }
    return (
      <anchor >
        <ItemModalDisplay class="modal" id="modal">
          <CloseButton onClick={this.onClose} onMouseOut={this.onClose} class="toggle-button">Close</CloseButton>
          <h2>{this.props.item.name}</h2>
          <ItemImage src={'./' + this.props.item.image + '.png'}></ItemImage>
          <p>{this.props.item.flavor}</p>
        </ItemModalDisplay>
      </anchor>
    );
  }
}