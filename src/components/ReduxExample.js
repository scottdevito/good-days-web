// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import ResourcesHOC from './reusable/ResourcesHOC';
import { Card, CTAPrimaryBlue } from '../reusable-styles/reusable-styles';
import SignalRExample from './SignalRExample';

type Props = {
  getAPIDataPromise: () => mixed,
  exampleState?: {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
  },
  signalRState: {
    message: string,
    notification: string,
  },
  sendSocketMessage: () => mixed,
};

class ReduxExample extends Component<Props> {
  static defaultProps = {
    exampleState: undefined,
    signalRState: { message: 'no signal yet', notification: 'no message yet' },
  };

  handleActionClick = () => {
    this.props.getAPIDataPromise();
  };

  render() {
    const { exampleState, signalRState } = this.props;
    let reduxExampleSection = null;

    if (exampleState && exampleState !== []) {
      reduxExampleSection = `Data: ${exampleState.title}`;
    }

    return (
      <ReduxExampleWrapper>
        <h1>Redux</h1>
        <ResourcesHOC>
          <a href="https://redux.js.org/">https://redux.js.org/</a>
        </ResourcesHOC>

        <h3>Test Data Fetch Action:</h3>
        <CTAPrimaryBlue onClick={() => this.handleActionClick()}>
          Dispatch Redux Action
        </CTAPrimaryBlue>
        {reduxExampleSection}
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
