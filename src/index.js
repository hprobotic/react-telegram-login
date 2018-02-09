// @flow
import React from 'react';

class TelegramLoginButton extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { botName, dataSize, requestAccess, usePic, dataOnauth } = this.props;
    window.TelegramLoginWidget = {
      dataOnauth: user => dataOnauth(user)
    };

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?2';
    script.setAttribute('data-telegram-login', botName || 'samplebot');
    script.setAttribute('data-size', dataSize || 'large');
    script.setAttribute('data-request-access', requestAccess || 'write');
    script.setAttribute('data-userpic', !usePic);
    script.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)');
    script.async = true;
    this.instance.appendChild(script);
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref={component => {
          this.instance = component;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default TelegramLoginButton;
