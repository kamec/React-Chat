import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Chat from './Chat.js';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      socket: props.socket,
    };
  }

  setName(name) {
    this.setState({ name: name });
  }

  hasName() {
    return this.state.name === '' ? false : true;
  }

  render() {
    const { name, socket } = this.state;
    return this.hasName()
      ? <Chat name={name} socket={socket} />
      : <Welcome setName={this.setName.bind(this)} />;
  }
}
