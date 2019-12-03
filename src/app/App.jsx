import React from 'react';
import PropTypes from 'prop-types';
import {HomeScreen} from '../home-screen/HomeScreen';

export const App = (props) => {
  const {offers} = props;

  return (
    <HomeScreen offers={offers} />
  );
};

App.defaultProps = {
  offers: [],
};

App.propTypes = {
  offers: PropTypes.array,
};
