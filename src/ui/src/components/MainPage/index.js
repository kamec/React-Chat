import React, { Component } from 'react';
import io from 'socket.io-client';

import Welcome from '../Welcome';
import Chat from '../Chat';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      socket: io(),
    };
  }

  setName(name) {
    this.state.socket.emit('chat message', {
      data: name,
      name: 'Meet newcomer',
    });
    this.setState({ name });
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
