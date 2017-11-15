import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders Info Modal when true', () => {
    const wrapper = shallow(<Header showInfoModal={true} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(true);
  });

  it('Hides Info Modal when false', () => {
    const wrapper = shallow(<Header showInfoModal={false} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(false);
  });
});