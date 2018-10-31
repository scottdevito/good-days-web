import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import StyledComponentsExample from '../../components/StyledComponentsExample';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<StyledComponentsExample />).toJSON();
  expect(tree).toMatchSnapshot();
});
