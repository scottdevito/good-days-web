import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactRouterExample from '../../components/ReactRouterExample';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <ReactRouterExample />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
