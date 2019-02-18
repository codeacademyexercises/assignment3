import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BookByAuthor from './BookByAuthor';

describe('<BookByAuthor /> ',()=>{
    it('snapShot test ',()=>{
        const wrapper = shallow(<BookByAuthor InitialState={[{}]}/>);
        expect(wrapper).toMatchSnapshot();
    })
})