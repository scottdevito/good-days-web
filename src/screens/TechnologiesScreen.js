import React from 'react';
import styled from 'styled-components';

import MaterialUIExample from '../components/MaterialUIExample';
import StyledComponentsExample from '../components/StyledComponentsExample';
import TypesExample from '../components/TypesExample';
import TestingExample from '../components/TestingExample';
import ReduxExampleContainer from '../redux/containers/ReduxExample.C';

const TechnologiesScreen = () => {
  return (
    <TechnologiesScreenWrapper>
      <MaterialUIExample />
      <StyledComponentsExample />
      <TypesExample />
      <TestingExample />
      <ReduxExampleContainer />
    </TechnologiesScreenWrapper>
  );
};

export default TechnologiesScreen;

const TechnologiesScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
`;
