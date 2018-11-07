// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CTAPrimaryRed } from '../reusable-styles/reusable-styles';

const NoMatch = ({ location }) => {
  return (
    <NoMatchWrapper>
      <h3>404</h3>
      <p>No route found at route: {location.pathname}</p>
      <Link to="/">
        <CTAPrimaryRed>Home</CTAPrimaryRed>
      </Link>
    </NoMatchWrapper>
  );
};

export default NoMatch;

const NoMatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 90vh;
`;
