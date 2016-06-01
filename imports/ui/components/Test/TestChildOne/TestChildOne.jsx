import React, { PropTypes } from 'react';

export const TestChildOne = (props) => {
  const {
    clickCounter1Handler,
    counter1,
  } = props;
  return (
    <div className=""
      onClick={clickCounter1Handler}
    >
      Counter1: {counter1}
    </div>
  );
};

TestChildOne.propTypes = {
  counter1: PropTypes.number.isRequired,
  increaseCounter1: PropTypes.func,
  clickCounter1Handler: PropTypes.func,
};
