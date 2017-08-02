import React from 'react';
import './style.css';

export default function Message({ message }) {
  const { text, name, date, isEntry } = message;

  let dateObj = new Date(date);

  const renderedName = () => {
    return isEntry
      ? null
      : <div>
          {name}
        </div>;
  };

  return (
    <div className="message list-group-item">
      <div className="text">
        {text}
      </div>
      <div className="info">
        <div>
          {`${dateObj.toLocaleTimeString()} ${dateObj.toLocaleDateString()}`}
        </div>
        <span className="splitter">|</span>
        {renderedName()}
      </div>
    </div>
  );
}
