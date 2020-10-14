import React from 'react'

import Date from '../elements/Date';

import { mount } from 'enzyme';

describe("Test Date element render full date and week day", () => {
    let wrapper;

    wrapper = mount(<Date date="2020-10-14" />);

    test("render the date with week day", () => {
        expect(wrapper.find('span').text()).toBe("Wednesday October 14, 2020");
    });
});

describe("Test Date element render week day only", () => {
    let wrapper;

    wrapper = mount(<Date date="2020-10-14" weekDayOnly={true} />);

    test("render the week day only", () => {
        expect(wrapper.find('span').text()).toBe("Wednesday");
    });
});