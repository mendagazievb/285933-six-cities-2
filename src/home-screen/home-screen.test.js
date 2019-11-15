import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HomeScreen from './HomeScreen';

describe(`HomeScreen`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<HomeScreen/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders offers`, () => {
    const offers = [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
    ];

    const app = shallow(<HomeScreen offers={offers}/>);

    expect(app.find(`.place-card`)).toHaveLength(offers.length);
  });
});
