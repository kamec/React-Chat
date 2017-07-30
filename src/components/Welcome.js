import React from 'react';
import SendDataComponent from './SendDataComponent.js';

export default function Welcome(props) {
  return(
    <div>
      <h1>What is your name?</h1>
      <SendDataComponent onClickAction={props.setName}/>
    </div>
  )
}