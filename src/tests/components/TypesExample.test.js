import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import TypesExample from '../../components/technologies-screen/TypesExample';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<TypesExample />).toJSON();
  expect(tree).toMatchSnapshot();
});
