import React from 'react'

import WeatherIcon from '../elements/WeatherIcon';

import { mount } from 'enzyme';

describe("Test render degree", () => {
    let wrapper;

    wrapper = mount(<WeatherIcon name="iconName" />);

    test("int without float", () => {
        expect(wrapper.find('img').prop("src")).toEqual("https://www.metaweather.com/static/img/weather/iconName.svg");
    });
});