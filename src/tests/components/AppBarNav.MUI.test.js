import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import AppBarNav from '../../components/reusable/AppBarNav.MUI';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<AppBarNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
