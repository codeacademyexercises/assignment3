import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Library from './Library';

describe('<Library /> ',()=>{
    it('snapshot test',()=>{
        const wrapper = shallow(<Library />);
        expect(wrapper).toMatchSnapshot();
    })
})