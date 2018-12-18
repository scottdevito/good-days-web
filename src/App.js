// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoMatchScreen from './screens/NoMatchScreen';
// import AppBarNav from './components/reusable/AppBarNav.MUI';
import WelcomeScreen from './screens/WelcomeScreen';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Router>
        <AppWrapper>
          {/* <AppBarNav /> */}
          <Switch>
            <Route path="/" exact component={WelcomeScreen} />
            <Route component={NoMatchScreen} />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
