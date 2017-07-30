import React from 'react';
import Messages from './Messages.js';
import SendDataComponent from './SendDataComponent.js';

export default function Chat(props) {
  const { name, socket } = props;
  const sendMessage = message => socket.emit('chat message', message);
  return (
    <div>
      <Messages socket={socket} />
      <SendDataComponent name={name} onClickAction={sendMessage} />
    </div>
  );
}
