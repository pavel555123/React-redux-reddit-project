import React from "react";
import {Dropdown} from "../Dropdown";
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div>777</div>} button={<button>555</button>}/>)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })

    test('should render (snapshot', () => {
        const wrapper = shallow(<Dropdown children={<div>777</div>} button={<button>555</button>}/>)

        expect(wrapper).toMatchSnapshot();
    })
});