import React, { PropTypes } from 'react';

export const CounterThree = (props) => {
  const {
    clickCounter3Handler,
    counter3,
  } = props;
  return (
    <div className=""
      onClick={clickCounter3Handler}
    >
      Counter3: {counter3}
    </div>
  );
};

CounterThree.propTypes = {
  counter3: PropTypes.number,
  clickCounter3Handler: PropTypes.func,
};
