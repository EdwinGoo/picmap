import React from 'react';
import './AppTemplate.css';
import PropTypes from 'prop-types';

const AppTemplate = ({ testFrame2 }) => {
  return (
    <div className="app-template">
      <div className="testFrame2">{testFrame2}</div>
    </div>
  );
};

AppTemplate.propTypes = {
  testFrame2: PropTypes.object.isRequired,
};

export default AppTemplate;
