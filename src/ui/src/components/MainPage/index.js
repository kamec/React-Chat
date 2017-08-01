import React, { Component } from 'react';
import io from 'socket.io-client';

import Welcome from '../Welcome';
import Chat from '../Chat';

export default class MainPage extends Component {
  state = {
    name: '',
    socket: io(),
  };

  setName = name => {
    this.state.socket.emit('chat message', {
      data: `"${name}" has entered the chat.`,
    });
    this.setState({ name });
  };

  hasName = () => this.state.name !== '';

  render() {
    const { name, socket } = this.state;
    return this.hasName()
      ? <Chat name={name} socket={socket} />
      : <Welcome setName={this.setName} />;
  }
}
