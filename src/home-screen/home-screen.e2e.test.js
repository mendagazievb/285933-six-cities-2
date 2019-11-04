import React from 'react';
import {shallow} from 'enzyme';
import HomeScreen from './HomeScreen';

describe(`HomeScreen`, () => {
  it(`Click to title offers card`, () => {
    const clickHandler = jest.fn();
    const offers = [`Wood and stone place`];

    const app = shallow(<HomeScreen offers={offers} clickHandler={clickHandler}/>);

    const startButton = app.find(`h2.place-card__name`);

    startButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
