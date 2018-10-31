import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import TestingExample from '../../components/TestingExample';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<TestingExample />).toJSON();
  expect(tree).toMatchSnapshot();
});
