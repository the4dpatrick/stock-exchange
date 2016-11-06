import React from 'react';
import { shallow } from 'enzyme';
import Nav from './index.js';
import SearchBarContainer from '../../containers/SearchBarContainer';

it('renders Nav', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.find('.nav').length).toBe(1);
});

it('renders search bar', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.find(SearchBarContainer).length).toBe(1);
});
