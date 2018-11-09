// @flow
import React from 'react';
import styled from 'styled-components';

import NoMatch from '../components/NoMatch';
import type RouterLocation from '../constants/FlowTypes';

type Props = {
  location: RouterLocation,
};

const NoMatchScreen = (props: Props) => {
  return (
    <NoMatchScreenWrapper>
      <NoMatch {...props} />
    </NoMatchScreenWrapper>
  );
};

export default NoMatchScreen;

const NoMatchScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 90vh;
`;
