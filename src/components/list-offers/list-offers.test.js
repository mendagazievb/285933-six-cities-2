import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {ListOffers} from './ListOffers';
import {offers} from '../../mocks/offers';

describe(`ListOffers`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<ListOffers offers={offers} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders offers`, () => {
    const app = mount(<ListOffers offers={offers} />);

    expect(app.find(`.place-card`)).toHaveLength(offers.length);
  });
});
