import React from 'react';

const Counter = ({ number, onIncrement, onDecrement }) => (
  <div>
    <h1>{number}</h1>
    <button onClick={onIncrement}>INC(+)</button>
    <button onClick={onDecrement}>DEC(-)</button>
  </div>
);

Counter.defaultProps = {
  number: 0,
};

export default Counter;
