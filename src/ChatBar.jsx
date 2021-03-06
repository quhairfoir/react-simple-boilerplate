import React from 'react';
import PropTypes from 'prop-types';

function ChatBar ({currentUser, makeNewMessage, setUsername}){

  const currentUsername = (currentUser.name === 'Anonymous') ? 'Your username here...' : currentUser.name;

  const onBlur = event => {
    if (event.target.value === '') {
      return event.target.value = currentUser.name
    }
    const name = event.target.value;
    setUsername(name);
  }

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      const content = event.target.value;
      makeNewMessage(content, 'postMessage');
      event.target.value = '';
    }
  }

  return (
    <footer className='chatbar'>
      <input onBlur={onBlur}
        className='chatbar-username' 
        placeholder={currentUsername} 
        />
      <input onKeyPress={onKeyPress}
        className='chatbar-message'
        placeholder='Type a message and hit ENTER'
      />
    </footer>
  );
}
ChatBar.propTypes = {
  setUsername: PropTypes.func,
  makeNewMessage: PropTypes.func,
  currentUser: PropTypes.object
};

export default ChatBar;