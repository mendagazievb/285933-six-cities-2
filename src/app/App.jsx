import React from 'react';
import PropTypes from 'prop-types';
import HomeScreen from '../home-screen/HomeScreen';

const App = (props) => {
  const {offers, clickHandler} = props;

  return (
    <HomeScreen
      offers={offers}
      clickHandler={clickHandler}
    />
  );
};

App.defaultProps = {
  offers: [],
};

App.propTypes = {
  offers: PropTypes.array,
  clickHandler: PropTypes.func,
};

export default App;
