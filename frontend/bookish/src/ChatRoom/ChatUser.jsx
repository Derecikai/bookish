// ChatUser.js
import React from 'react';
import './ChatUser.css';

const ChatUser = ({ data, onClick, isClicked }) => {
  return (
    <div
      className={`user-chat-container ${isClicked ? 'clicked' : ''}`}
      onClick={() => onClick(data.id)}
    >
      <img className='user-chat-pp' src={data.picture} alt="" />
      <div className='name-text'>
        <h4 className='chat-prof-name'>{data.name}</h4>
        <h5 className='chat-prof-name'>{data.message}</h5>

      </div>
    </div>
  );
};

export default ChatUser;

