import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
    test('Should be Navbar', () => {
        const wrapper = mount(<Navbar />);
        expect(wrapper.is('Navbar')).toBeTruthy();
    });
});

describe("Navbar with Search", () => {
    test("Should be Navbar", () => {
        const wrapper = mount(<Navbar setSearch={e => console.log("[Expected] ", e)} />);
        expect(wrapper.is("Navbar")).toBeTruthy();
    });
});
