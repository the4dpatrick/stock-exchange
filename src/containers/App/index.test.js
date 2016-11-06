import React from 'react';
import { shallow } from 'enzyme';
import App from './index.js';
import Nav from '../../components/Nav';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders App', () => {
    expect(wrapper.find('.App').length).toBe(1);
  });

  it('contains Nav', () => {
    expect(wrapper.find(Nav).length).toBe(1);
  })
})
