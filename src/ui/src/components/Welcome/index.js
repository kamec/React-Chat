import React from 'react';
import SendDataComponent from '../SendData';
import './style.css';

export default function Welcome(props) {
  return(
    <div className="welcome col-xs-10 col-xs-offset-1">
      <h1 className="text-center">What is your name?</h1>
      <SendDataComponent onClickAction={props.setName} placeholder={'Enter your name...'} />
    </div>
  )
}