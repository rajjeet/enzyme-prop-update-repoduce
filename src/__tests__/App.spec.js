import App from "../App";
import {mount} from "enzyme";
import React from "react";
import configuredStore from "../configureStore";
import {Provider} from "react-redux";

describe('App', () => {
    it('renders', () => {
        const wrapper = mount(
            <Provider store={configuredStore}>
            <App/>
            </Provider>
        );

        wrapper.find('#local-btn').props().onClick();
        wrapper.find('#global-btn').props().onClick();

        expect(wrapper.find('#all-text').text()).toEqual("3");
        expect(wrapper.find('#local-text').text()).toEqual("Local: 1");
        expect(wrapper.find('#global-text').text()).toEqual("Global: 2");
        expect(wrapper.find('#global-copy-text').text()).toEqual("Global Copy: 0");

    });
});
