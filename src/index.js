import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import {offers} from './mocks/offers';

const init = () => {
  const settings = {
    offers,
  };

  ReactDOM.render(
      <App
        offers={settings.offers}
      />,
      document.querySelector(`#root`));
};

init();
