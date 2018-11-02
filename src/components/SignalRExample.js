import React, { Component } from 'react';
import styled from 'styled-components';

import { Card, CTAPrimaryBlue } from '../reusable-styles/reusable-styles';

class SignalRExample extends Component {
  state = {};

  handleClick() {
    this.props.sendSocketMessage('test');
  }

  render() {
    return (
      <SignalRExampleWrapper>
        <div>
          Send a SignalR Message. Note: This will only work while connected to
          SignalR API.
        </div>
        <br />
        <button onClick={this.handleClick.bind(this)}>press me</button>
        <div>{`SignalR Message: ${this.props.message || ''}`}</div>
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
