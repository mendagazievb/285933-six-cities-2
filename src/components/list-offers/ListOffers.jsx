import React from 'react';
import PropTypes from 'prop-types';
import {OfferCard} from '../offer-card/OfferCard';

export class ListOffers extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: -1,
    };
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">

      {offers.map((offer, index) =>
        <OfferCard
          key={`${offer.title}-${index}`}
          index={index}
          title={offer.title}
          image={offer.image}
          cost={offer.cost}
          type={offer.type}
          rating={offer.rating}
          isPremium={offer.isPremium}
          onCardHover={(activeCardIndex) => {
            this.setState({
              activeOffer: activeCardIndex,
            });
          }}
        />
      )}

    </div>;
  }
}

ListOffers.defaultProps = {
  offers: [],
};

ListOffers.propTypes = {
  offers: PropTypes.array,
};
