import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../../client/src/components/Stars';

describe('<ProductOptions />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper.exists('.stars')).toBe(true);
  });
});
