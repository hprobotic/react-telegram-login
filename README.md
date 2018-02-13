# React Telegram Login

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

Default dev server runs at localost:8080 in browser.
You can set IP and PORT in webpack.config.js

## Run Tests

```
npm run test:watch
```

## Production Bundle

```
npm run bundle
```
