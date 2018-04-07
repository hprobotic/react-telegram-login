# React Telegram Login <img src="https://i.imgur.com/73cXluE.png" width="240" heigth="auto" />

> A Telegram oAUth Sign-in / Log-in Component for React

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

```js
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
- It's only run on port 80. When you use `create-react-app`. You must run `sudo yarn PORT=80 start`

## Parameters

Telegram Scopes List: https://core.telegram.org/widgets/login

## dataOnauth callback

dataOnauth callback returns a TelegramUser object which provides access
to all of the TelegramUser methods listed here: https://core.telegram.org/widgets/login.

You can also access the returned values via the following properties on the returned object.

| property name | value  |    definition    |
| :-----------: | :----: | :--------------: |
|     user      | object | user information |

You can also pass child components such as icons into the button component.

Sample success response from Telegram:

```json
// TODO: add
```

```js
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
