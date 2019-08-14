import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

const item = {
    title: "Eggnog Thumbprints",
    href: "http:\/\/allrecipes.com\/Recipe\/Eggnog-Thumbprints\/Detail.aspx",
    ingredients: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
    thumbnail: "http:\/\/img.recipepuppy.com\/3.jpg"
};

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    });
});

describe('RecipeItem with recipe', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem recipe={item} />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    });
});

test('Should have a mark tag', () => {
    const wrapper = mount(<RecipeItem recipe={item} light="egg" />);
    expect(wrapper.exists('mark')).toBeTruthy();
});