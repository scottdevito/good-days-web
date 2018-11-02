import React, { Component } from 'react';
import styled from 'styled-components';

import MaterialUIExample from './components/MaterialUIExample';
import StyledComponentsExample from './components/StyledComponentsExample';
import TypesExample from './components/TypesExample';
import TestingExample from './components/TestingExample';
import ReduxExampleContainer from './redux/containers/ReduxExample.C';
import LiveUpdateExample from './components/LiveUpdateExample';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <MaterialUIExample />
        <StyledComponentsExample />
        <TypesExample />
        <TestingExample />
        <ReduxExampleContainer />
        <LiveUpdateExample />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  min-height: 100vh;
  width: 100%;
`;
