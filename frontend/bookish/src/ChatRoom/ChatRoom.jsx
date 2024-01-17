// ChatRoom.js
import React, { useState } from 'react';
import './Chat.css';
import ChatUser from './ChatUser';
import { users1, users2, users3, users4, users5, users6, users7 } from './users';

const ChatRoom = () => {
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (id) => {
    setClickedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='anunturi-chat-container'>
      <div className='anunturi-form-chat-Container'>
        <div className='chat-container-1'>
          <div className='users-chat'>
            {[
              users1, users2, users3, users4, users5, users6, users7
            ].map((userData) => (
              <ChatUser
                key={userData.id}
                data={userData}
                onClick={() => handleClick(userData.id)}
                isClicked={clickedId === userData.id}
              />
            ))}
          </div>
        </div>

        <div className='chat-container-2'>
           <div className='message sent-message'>Your sent message</div>
      <div className='message received-message'>Received message from someone else</div>
      <input
            type='text'
            
            placeholder='Type your message...'
            className='message-input'
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;