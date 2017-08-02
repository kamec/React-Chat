import React from 'react';
import Messages from '../Messages';
import InputSubmit from '../InputSubmit';
import './style.css';

export default function Chat(props) {
  const { name, socket } = props;

  const sendMessage = text =>
    socket.emit('chat message', { name, text, date: Date.now() });

  return (
    <div>
      <Messages socket={socket} />
      <div className="send-message">
        <InputSubmit
          name={name}
          onClickAction={sendMessage}
          placeholder={'Enter your message...'}
        />
      </div>
    </div>
  );
}
