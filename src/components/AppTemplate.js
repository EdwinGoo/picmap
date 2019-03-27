import React from 'react';
import './AppTemplate.css';
import PropTypes from 'prop-types';

const AppTemplate = ({ mainFrame }) => {
  return (
    <div className="app-template">
      <div className="mainFrame">{mainFrame}</div>
    </div>
  );
};

AppTemplate.propTypes = {
  mainFrame: PropTypes.object.isRequired,
};

export default AppTemplate;
