import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index.js';

it('renders Nav', () => {
  const wrapper = shallow(<SearchBar searchResults={[]} search={()=>{}} transitionToMovieDetails={()=>{}}/>);
  expect(wrapper.find('#search-bar').length).toBe(1);
});
