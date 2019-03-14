import React from 'react';
import './AppTemplate.css';
import PropTypes from 'prop-types';

const AppTemplate = ({ testdata, counter }) => {
  return (
    <div className="app-template">
      <div className="counter">{counter}</div>
      <div className="countertemp">{testdata}</div>
    </div>
  );
};

AppTemplate.propTypes = {
  counter: PropTypes.objectOf.isRequired,
  testdata: PropTypes.objectOf.isRequired,
};

export default AppTemplate;
