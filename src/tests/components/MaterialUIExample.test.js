import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import MaterialUIExample from '../../components/MaterialUIExample';

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<MaterialUIExample />).toJSON();
  expect(tree).toMatchSnapshot();
});
