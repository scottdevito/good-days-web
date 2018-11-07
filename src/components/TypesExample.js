// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../reusable-styles/reusable-styles';
import ResourcesHOC from './reusable/ResourcesHOC';

class TypesExample extends Component<{}> {
  render() {
    return (
      <TypesExampleWrapper>
        <TypesHeader>Flow - static typing</TypesHeader>
        <img
          src="https://cdn-images-1.medium.com/max/1600/1*ulwmJZfctsdMiwO8HRFDKQ.png"
          alt="Flow uses example"
        />

        <ResourcesHOC>
          <h5>Flow setup with create-react-app</h5>
          <a href="https://facebook.github.io/create-react-app/docs/adding-flow">
            https://facebook.github.io/create-react-app/docs/adding-flow
          </a>
          <a href="https://flow.org/en/docs/tools/create-react-app/">
            https://flow.org/en/docs/tools/create-react-app/
          </a>
          <h5>How to use Flow</h5>
          <a href="https://youtu.be/dV8K6fsjDCQ">
            https://youtu.be/dV8K6fsjDCQ
          </a>
          <a href="https://youtu.be/L0nJTyHBTtE">
            https://youtu.be/L0nJTyHBTtE
          </a>
          <h5>Testing Redux and Flow</h5>
          <a href="https://hackernoon.com/how-to-snapshot-test-everything-in-your-redux-app-with-jest-fde305ebedea">
            https://hackernoon.com/how-to-snapshot-test-everything-in-your-redux-app-with-jest-fde305ebedea
          </a>
          <a href="https://github.com/airbnb/enzyme/issues/1002">
            https://github.com/airbnb/enzyme/issues/1002
          </a>
        </ResourcesHOC>
      </TypesExampleWrapper>
    );
  }
}

export default TypesExample;

const TypesExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TypesHeader = styled.h1``;
