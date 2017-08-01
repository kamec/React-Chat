import React from 'react';
import InputSubmit from '../InputSubmit';
import './style.css';

export default function Welcome(props) {
  return (
    <div className="welcome col-xs-10 col-xs-offset-1">
      <h1 className="text-center">What is your name?</h1>
      <InputSubmit
        onClickAction={props.setName}
        placeholder={'Enter your name...'}
      />
    </div>
  );
}
