import React from 'react';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
  console.log(response);
};
 
ReactDOM.render(
  <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="OdauBot" language="en" />,
  document.getElementById('telegramButton')
);
