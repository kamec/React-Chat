import React from 'react';
import './style.css';

export default function Message({ message }) {
  const { data, name, date } = message;
  return (
    <div className="message list-group-item">
      <div className="text">
        {data}
      </div>
      <div className="info">
        <div className="name">
          {name}
        </div>
        <span className="splitter">|</span>
        <div className="date">
          {date}
        </div>
      </div>
    </div>
  );
}
