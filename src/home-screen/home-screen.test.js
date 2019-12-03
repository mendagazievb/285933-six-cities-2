import React from 'react';
import renderer from 'react-test-renderer';
import {HomeScreen} from './HomeScreen';
import {offers} from '../mocks/offers';

describe(`HomeScreen`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<HomeScreen offers={offers} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
