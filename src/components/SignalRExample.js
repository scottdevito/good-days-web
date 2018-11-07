import React, { Component } from 'react';
import styled from 'styled-components';

import { Card } from '../reusable-styles/reusable-styles';

class SignalRExample extends Component {
  state = {};

  handleClick() {
    this.props.sendSocketMessage('test');
  }

  render() {
    const { message, notification } = this.props;
    return (
      <SignalRExampleWrapper>
        <div>Send a SignalR Message.</div>
        <i>Note: This will only work while connected to SignalR API.</i>
        <br />
        <button onClick={this.handleClick.bind(this)}>Send message</button>
        <div>{`Response: ${message || ''}`}</div>
        <br />
        <div>{`Get all Inventory to recieve notification: ${notification ||
          ''}`}</div>
      </SignalRExampleWrapper>
    );
  }
}

export default SignalRExample;

const SignalRExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
