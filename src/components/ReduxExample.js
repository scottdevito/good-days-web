import React, { Component } from 'react';
import styled from 'styled-components';

import ResourcesHOC from './reusable/ResourcesHOC';
import { Card, CTAPrimaryBlue } from '../reusable-styles/reusable-styles';
import SignalRExample from './SignalRExample';

class ReduxExample extends Component {
  handleActionClick = () => {
    this.props.getAPIDataPromise();
  };

  render() {
    const { exampleState, signalRState } = this.props;
    let reduxExmapleSection = null;

    if (exampleState && exampleState !== []) {
      reduxExmapleSection = `Data: ${exampleState.title}`;
    }

    return (
      <ReduxExampleWrapper>
        <h1>Redux</h1>
        <ul>
          <li>npm i --save redux react-redux redux-promise redux-thunk</li>
          <li>Add redux specific code into src/index.js</li>
        </ul>
        <ResourcesHOC>Some Resource</ResourcesHOC>

        <h3>Test Data Fetch Action:</h3>
        <CTAPrimaryBlue onClick={() => this.handleActionClick()}>
          Dispatch Redux Action
        </CTAPrimaryBlue>
        {reduxExmapleSection}
        <SignalRExample
          sendSocketMessage={this.props.sendSocketMessage}
          message={signalRState.message}
          notification={signalRState.notification}
        />
      </ReduxExampleWrapper>
    );
  }
}

export default ReduxExample;

const ReduxExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
