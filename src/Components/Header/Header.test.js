import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header /> ',()=>{
    it('snapshot test',()=>{
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    })
})