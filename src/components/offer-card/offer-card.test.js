import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCard} from './OfferCard';
import {offers} from '../../mocks/offers';

describe(`OfferCard`, () => {
  it(`renders correctly`, () => {
    const offer = offers[0];
    const tree = renderer
      .create(<OfferCard
        title={offer.title}
        image={offer.image}
        cost={offer.cost}
        type={offer.type}
        rating={offer.rating}
        isPremium={offer.isPremium}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
