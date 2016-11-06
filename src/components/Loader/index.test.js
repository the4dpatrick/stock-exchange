import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index.js';

it('renders loader', () => {
  const wrapper = shallow(<Loader/>);
  const loader = (
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>  
  )
  expect(wrapper.contains(loader)).toEqual(true);
})
