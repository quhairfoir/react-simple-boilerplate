import React from 'react';
import PropTypes from 'prop-types';


function ChatBar ({currentUser, makeNewMessage, setUsername}){
  console.log(currentUser);

  const currentUsername = currentUser.name || 'Your username here...'

  const onChange = event => {
    const name = event.target.value;
    setUsername(name);
  }

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      const content = event.target.value;
      makeNewMessage(content)
      event.target.value = '';
    }
  }

  return (
    <footer className="chatbar">
      <input id="username-field"
        onChange={onChange} 
        className="chatbar-username" 
        placeholder={currentUsername} 
        />
      <input onKeyPress={onKeyPress}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER"
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