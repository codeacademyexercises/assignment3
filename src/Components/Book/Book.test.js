import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Book from './Book';

describe('<Book /> ',()=>{
    it('snapshot Testing',()=>{
        const wrapper = shallow(<Book bookinfo={{Name: 'Harry', rating: 4.5,}}/>);
        expect(wrapper).toMatchSnapshot();
    })
})