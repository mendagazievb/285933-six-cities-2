import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/App";

const init = () => {
  const settings = {
    offers: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ],
  };

  ReactDOM.render(<App offers={settings.offers} />, document.querySelector(`#root`));
};

init();
