import React from 'react';
import ReactDOM from 'react-dom';
import ReduxExample from '../../components/ReduxExample';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<ReduxExample />).toJSON();
  expect(tree).toMatchSnapshot();
});
