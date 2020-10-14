import React from 'react'

import Degree from '../elements/Degree';

import { mount } from 'enzyme';

describe("Test render degree", () => {
    let wrapper;

    wrapper = mount(<Degree degree={13.524324} />);

    test("int without float", () => {
        expect(wrapper.find('span').text()).toBe("13°C");
    });
});