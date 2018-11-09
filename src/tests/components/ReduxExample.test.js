import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import ReduxExample from '../../components/technologies-screen/ReduxExample';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<ReduxExample />).toJSON();
  expect(tree).toMatchSnapshot();
});
