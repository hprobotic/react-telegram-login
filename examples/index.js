import React from 'react';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';

const responseTelegram = response => {
  console.log(response);
};

ReactDOM.render(
  <div>
    <TelegramLoginButton dataOnauth={this.responseTelegram} botName="OdauBot" />
  </div>,
  document.getElementById('telegram-login')
);
