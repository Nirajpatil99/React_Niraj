import React, { Component } from 'react';

class MessageModifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button to modify the message.',
    };
  }

  modifyMessage = () => {
    this.setState({
      message: 'Thank you for using my React application.',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.modifyMessage}>Modify Message</button>
      </div>
    );
  }
}

export default MessageModifier;