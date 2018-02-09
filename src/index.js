// @flow
import React from 'react';

export default class TelegramLoginButton extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { botName, dataSize, requestAccess, usePic } = this.props;
    window.TelegramLoginWidget = {
      self: this,
      dataOnauth: function(user) {
        self.props.dataOnauth(user);
      }
    };

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?2';
    script.setAttribute('data-telegram-login', botName || 'samplebot');
    script.setAttribute('data-size', dataSize || 'large');
    script.setAttribute('data-request-access', requestAccess || 'write');
    script.setAttribute('data-userpic', !usePic);
    script.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)');
    script.async = true;
    self.instance.appendChild(script);
  }

  render() {
    return (
      <div
        id="telegram-button"
        ref={component => {
          this.instance = component;
        }}
      />
    );
  }
}
