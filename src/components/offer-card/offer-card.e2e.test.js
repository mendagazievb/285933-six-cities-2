import React from 'react';
import {shallow} from 'enzyme';
import {OfferCard} from './OfferCard';
import {offers} from '../../mocks/offers';

describe(`OfferCard`, () => {
  it(`MouseEnter to offer card`, () => {
    const mouseEnterHandler = jest.fn((x) => x);
    const offer = offers[0];

    const app = shallow(<OfferCard
      index={1}
      title={offer.title}
      image={offer.image}
      cost={offer.cost}
      type={offer.type}
      rating={offer.rating}
      isPremium={offer.isPremium}
      onCardHover={mouseEnterHandler}
    />);

    const card = app.find(`.place-card`);

    card.simulate(`mouseenter`);
    expect(mouseEnterHandler.mock.results[0].value).toBe(1);
  });
});
