import React from 'react';
import Messages from '../Messages';
import InputSubmit from '../InputSubmit';
import './style.css';

export default function Chat(props) {
  const { name, socket } = props;
  const sendMessage = message => socket.emit('chat message', message);
  return (
    <div className="chat-wrapper">
      <Messages socket={socket} />
      <div id="send-message">
        <InputSubmit
          name={name}
          onClickAction={sendMessage}
          placeholder={'Enter your message...'}
        />
      </div>
    </div>
  );
}
