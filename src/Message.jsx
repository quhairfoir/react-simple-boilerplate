import React from 'react';
import PropTypes from 'prop-types';

function Message({ username, content, type, color }) {

  const userColor = color ? {color: `${color}`} : '';

  console.log('This is userColor:', userColor);

  const messageHTML =
    type === 'incomingMessage' ? (
      <div className='message'>
        <span className='message-username' style={userColor}>{username}</span>
        <span className='message-content'>{content}</span>
      </div>
    ) : (
      <div className='message system'>
        {content}
      </div>
    );
  console.log(
    'This is username and content inside message:',
    username,
    content
  );
  return (
    <div>
    {messageHTML}
    </div>
  );
}

Message.propTypes = {
  color: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string
};

export default Message;
