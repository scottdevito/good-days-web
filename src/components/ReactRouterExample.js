// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Card, CTAPrimaryBlue } from '../reusable-styles/reusable-styles';
import ResourcesHOC from './reusable/ResourcesHOC';

const ReactRouterExample = () => {
  return (
    <ReactRouterExampleWrapper>
      <h1>React Router</h1>
      <ResourcesHOC>
        <a href="https://reacttraining.com/react-router/web/guides/quick-start">
          https://reacttraining.com/react-router/web/guides/quick-start
        </a>
      </ResourcesHOC>

      <h4>Test routing:</h4>
      <Link to="/react-router-test">
        <CTAPrimaryBlue>Some Link</CTAPrimaryBlue>
      </Link>
    </ReactRouterExampleWrapper>
  );
};

export default ReactRouterExample;

const ReactRouterExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
