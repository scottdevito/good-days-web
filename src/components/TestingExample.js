// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../reusable-styles/reusable-styles';
import ResourcesHOC from './reusable/ResourcesHOC';

type Props = {};

class TestingExample extends Component<Props> {
  render() {
    return (
      <TestingExampleWrapper>
        <h1>Testing</h1>
        <ResourcesHOC>
          <h5>Snapshot</h5>
          <a href="https://jestjs.io/docs/en/snapshot-testing">
            https://jestjs.io/docs/en/snapshot-testing
          </a>
          <a href="https://www.youtube.com/watch?v=9liG4PuqKY0">
            https://www.youtube.com/watch?v=9liG4PuqKY0
          </a>
          <h5>Unit Tests</h5>
          <a href="https://github.com/airbnb/enzyme">
            https://github.com/airbnb/enzyme
          </a>
          <a href="https://airbnb.io/enzyme/docs/installation/index.html">
            https://airbnb.io/enzyme/docs/installation/index.html
          </a>
        </ResourcesHOC>
      </TestingExampleWrapper>
    );
  }
}

export default TestingExample;

const TestingExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(229, 126, 126, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
