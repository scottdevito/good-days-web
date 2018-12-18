import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

// Create snapshot tests at feature level

// Unit tests
it('renders without crashing', () => {
  shallow(<App />).dive();
});

// it('renders one h1 tag', () => {
//   const wrapper = shallow(<TestingExample />);
//   expect(wrapper.find('h1')).toHaveLength(1);
// });

// describe('<TestingExample />', () => {
//   it('renders two <a> tags', () => {
//     const wrapper = mount(<TestingExample />);
//     console.error(wrapper, expect(wrapper.find('a')));
//     expect(wrapper.find('a')).to.have.lengthOf(2);
//   });
// });
