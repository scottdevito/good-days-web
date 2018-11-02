import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../reusable-styles/reusable-styles';
import * as signalR from '@aspnet/signalr';

class LiveUpdateExample extends Component {
  constructor(props) {
    super(props);

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:54699/chatHub/')
      .build();

    this.connection.on('ReceiveMessage', data => {
      console.error(data);
    });
    this.connection.start().catch(function(err) {
      return console.error(err.toString());
    });

    this.state = { name: '', text: '' };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick() {
    console.error(this.connection);
    this.connection
      .invoke('SendMessage', this.state.name, this.state.text)
      .catch(function(err) {
        return console.error(err.toString());
      });
  }

  render() {
    return (
      <LiveUpdateExampleWrapper>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)}
        />
        <label>Text</label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>chat</button>
      </LiveUpdateExampleWrapper>
    );
  }
}

export default LiveUpdateExample;

const LiveUpdateExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
