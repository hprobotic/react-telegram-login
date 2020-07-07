# React Telegram Login
<img src="https://i.imgur.com/73cXluE.png" width="240" heigth="auto" />

> A Telegram OAuth Sign-in / Log-in Component for React

![Code](https://i.imgur.com/PYyCD3w.png)

## Install

```
npm install react-telegram-login
```

or

```
yarn add react-telegram-login
```

## How to use

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';
 
const handleTelegramResponse = response => {
  console.log(response);
};
 
ReactDOM.render(
  <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="OdauBot" />,
  document.getElementById('telegramButton')
);
```
### Notes:
- Login widget will not work on `localhost` or `local-ip-address`. Use should create and register your bot domain with BotFather to get that work. You can create your custom domain. For example: `yourdomain.local` by add new record point to your local ip by edit `hosts` file.
- It's only run on port 80. When you use `create-react-app`. You must run `sudo yarn PORT=80 start`, or on Windows CMD (not powershell), `set PORT=80 && yarn start`

## Parameters

Telegram Scopes List: https://core.telegram.org/widgets/login

## dataOnauth callback

dataOnauth callback returns a TelegramUser object which provides access
to all of the TelegramUser methods listed here: https://core.telegram.org/widgets/login.

## dataAuthUrl redirection url

dataAuthUrl is a string which corresponds to the url where the user is redirected after a successful authorization. You should either use dataAuthUrl or dataOnauth, not both of them

### Receiving authorization data
After a successful authorization, the widget can return data in two ways:

* by redirecting the user to the URL specified in the data-auth-url attribute with the following parameters: 
`id`, `first_name`, `last_name`, `username`, `photo_url`, `auth_date`, `hash` and `lang`;
* by calling the callback function data-onauth with the JSON-object containing `id`, `first_name`, `last_name`, `username`, `photo_url`, `auth_date`, `hash` and `lang` fields.

```jsx
<TelegramLoginButton dataOnauth={this.handleUserInfo} botName="OdauBot" />
```

## Dev Server

```
npm run start
```
You can set IP and PORT in webpack.config.js

## Run Tests

```
npm run test:watch
```

## Production Bundle

```
npm run bundle
```
