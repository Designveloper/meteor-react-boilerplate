import React, { PropTypes } from 'react';

export const TestChildTwo = (props) => {
  const {
    clickCounter2Handler,
    counter2,
  } = props;
  return (
    <div className=""
      onClick={clickCounter2Handler}
    >
      Counter2: {counter2}
    </div>
  );
};

TestChildTwo.propTypes = {
  counter2: PropTypes.number,
  increaseCounter2: PropTypes.func,
  clickCounter2Handler: PropTypes.func,
};
