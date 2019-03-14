import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}>INC(+)</button>
      <button onClick={onDecrement}>DEC(-)</button>
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
