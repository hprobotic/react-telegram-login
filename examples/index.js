import React from 'react';
import ReactDOM from 'react-dom';
import TelegramLoginButton from '../src/';

const responseTelegram = response => {
  console.log(response);
};

ReactDOM.render(
  <div>
    <TelegramLoginButton />
  </div>,
  document.getElementById('telegram-login')
);
